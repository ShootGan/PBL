import { useQuery } from "react-query";
import Page from "~root/components/Page/Page";
import FreeThings from "~root/components/FreeThings/FreeThings";
import Facilities from "~root/components/Facilities/Facilities";
import AddresInfo from "~root/components/AddresInfo/AddresInfo";
import LocationImage from "./LocationImage";
import CardWrapper from "../../components/Card/CardWrapper";
import LocationButton from "./LocationButton";
import { Link } from "react-router-dom";
interface PlaceProperties {
  match: any;
}

const Location = ({ match }: PlaceProperties) => {
  const locationId = match.params.objectId;
  const { data: locationData, isLoading: locationIssLoading } = useQuery(
    ["locationData", { locationId }],
    async () => {
      const response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/place/${locationId}`,
      );
      return await response.json();
    },
  );
  console.log(locationData);
  return !locationIssLoading && locationData ? (
    <CardWrapper>
      <Page title={locationData.Name}>
        <LocationImage src={locationData.ImagePath} alt={locationData.Name} />
        <h1>{locationData.Name}</h1>
        <AddresInfo objectId={locationData.ObjectId} />
        <FreeThings
          freeParking={locationData.FreeParking}
          freeEntry={locationData.FreeEntry}
          easyAcces={locationData.EasyAcces}
        />
        <Facilities objectId={locationData.ObjectId} />
        <p>{locationData.Description}</p>
        <a href={locationData.GMapLink}>
          <LocationButton>NAWIGUJ!</LocationButton>
        </a>
      </Page>
    </CardWrapper>
  ) : (
    <h1>coś poszło nie tak </h1>
  );
};

export default Location;
