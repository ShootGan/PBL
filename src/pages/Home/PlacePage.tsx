import { useState } from "react";
import Page from "~root/components/Page/Page";
import placesStore, { Place } from "~root/stores/PlacesStore/PlacesStore";


const PlacePage = () => {
    const placesState = useState(placesStore);
    return (
        <Page title={place.id}>



        </Page>
};

export default PlacePage;