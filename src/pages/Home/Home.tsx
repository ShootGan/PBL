import { useState } from "@hookstate/core";
import Card from "~root/components/Card/Card";
import Page from "~root/components/Page/Page";
import placesStore from "~root/stores/PlacesStore/PlacesStore";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect } from "react";
import BetterCard from "~root/components/Card/BetterCard";
export type Coordinates = { latitude: number; longitude: number };
const Home = () => {
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
    <Page title="strona główna">
      {placesState.get().map((place) => (
        <BetterCard
          key={place.id}
          place={place}
          currentLocation={currentLocationState.get()}
        />
      ))}
      ;
    </Page>
  );
};

export default Home;
