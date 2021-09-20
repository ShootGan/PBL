import { useState } from "@hookstate/core";
import Card from "~root/components/Card/Card";
import Page from "~root/components/Page/Page";
import placesStore from "~root/stores/PlacesStore/PlacesStore";
import { Geolocation } from "@capacitor/geolocation";
import { FC, useEffect } from "react";

export type Coordinates = { latitude: number; longitude: number };
const Home: FC = (): JSX.Element => {
  const currentLocationState = useState<null | Coordinates>(null);
  useEffect(() => {
    (async () => {
      const {
        coords: { latitude, longitude },
      } = await Geolocation.getCurrentPosition();
      console.log(latitude, longitude);
      currentLocationState.set({ latitude, longitude });
    })();
  }, []);
  const placesState = useState(placesStore);
  return (
    <Page title="Strona główna">
      {placesState.get().map((place) => (
        <Card
          key={place.ObjectId}
          place={place}
          currentLocation={currentLocationState.get()}
        />
      ))}
      ;
    </Page>
  );
};

export default Home;
