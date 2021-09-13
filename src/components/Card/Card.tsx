import { useState } from "@hookstate/core";
import { useHistory } from "react-router-dom";
import placesStore, { Place } from "~root/stores/PlacesStore/PlacesStore";
import { Coordinates } from "~root/pages/Home/Home";
import { getDistance } from "geolib";
import convert from "convert-units";
import { useEffect } from "react";
import CardWrapper from "./CardWrapper";
import CardImage from "./CaredImage";
import { useQuery } from "react-query";
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

const Card = ({ place, currentLocation }: CardProperties) => {
  const history = useHistory();
  const fixedDistanceState = useState<null | FixedDistance>(null);
  useEffect(() => {
    if (currentLocation && place) {
      const calculatedDistance = getDistance(
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

  const { data, isLoading } = useQuery(
    ["location", place.ObjectId],
    async () => {
      const response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/osm/city/${place.ObjectId}`,
      );
      const dataa = await response.json();
      console.log(dataa);
      return dataa;
    },
  );
  return (
    <CardWrapper>
      <CardImage src={place.ImagePath} alt={place.Name} />

      <CardHeading1>{place.Name}</CardHeading1>
      <CardHeading5>
        {data ? (data.city ? data.city : data.town) : "ni ma miasta"}
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
