import { useState } from "@hookstate/core";
import { useHistory } from "react-router-dom";
import { Place } from "~root/stores/PlacesStore/PlacesStore";
import { Coordinates } from "~root/pages/Home/Home";
import { getDistance } from "geolib";
import convert from "convert-units";
import { FC, useEffect } from "react";
import CardWrapper from "./CardWrapper";
import CardImage from "./CaredImage";
import { useQuery, UseQueryResult } from "react-query";
import CardParagraph from "./CardParagraph";
import CardHeading1 from "./CardHeading1";
import CardHeading5 from "./CardHeading5";

interface CardProperties {
  place: Place;
  currentLocation: null | Coordinates;
}

type FixedDistance = {
  value: number;
  unit: string;
};

const Card: FC<CardProperties> = ({
  place,
  currentLocation,
}: CardProperties): JSX.Element => {
  const history = useHistory();
  const fixedDistanceState = useState<null | FixedDistance>(null);
  useEffect(() => {
    if (currentLocation && place) {
      const calculatedDistance: number = getDistance(
        {
          latitude: currentLocation.latitude.toFixed(3),
          longitude: currentLocation.longitude.toFixed(3),
        },
        {
          latitude: place.Latitude.toFixed(3),
          longitude: place.Longitude.toFixed(3),
        },
      );

      const { val, unit } = convert(calculatedDistance)
        .from("m")
        .toBest({
          exclude: ["cm", "mm"],
        });
      fixedDistanceState.set({
        value: parseInt(val.toFixed(0)),
        unit,
      });
    }
  }, [currentLocation, place]);

  const { data, isLoading }: UseQueryResult<any, Error> = useQuery(
    ["location", place.ObjectId],
    async (): Promise<any> => {
      const response: Response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/osm/city/${place.ObjectId}`,
      );

      return await response.json();
    },
  );
  return (
    <CardWrapper>
      <CardImage src={place.ImagePath} alt={place.Name} />

      <CardHeading1>{place.Name}</CardHeading1>
      <CardHeading5>
        {data ? (data.city ? data.city : data.town) : " "}
      </CardHeading5>
      <CardHeading5>
        {fixedDistanceState.get()
          ? `${fixedDistanceState.get()!.value}${
              fixedDistanceState.get()!.unit
            } stąd`
          : "Ładowanie odległości"}
      </CardHeading5>

      <CardParagraph>{place.Description.slice(0, 300) + "..."}</CardParagraph>
      <CardHeading5 onClick={() => history.push(`/location/${place.ObjectId}`)}>
        Więcej
      </CardHeading5>
    </CardWrapper>
  );
};

export default Card;
