import { FC } from "react";
import { useQuery } from "react-query";
interface AddresInfoProperties {
  objectId: number;
}
const AddresInfo: FC<AddresInfoProperties> = ({
  objectId,
}: AddresInfoProperties): JSX.Element => {
  console.log(objectId);
  const { data, isLoading } = useQuery(["location", objectId], async () => {
    const response = await fetch(
      `https://slaska-wyprawa-backend.herokuapp.com/osm/city/${objectId}`,
    );
    const dataa = await response.json();
    console.log(dataa);
    return dataa;
  });
  console.log(data);
  return !isLoading && data ? (
    <h3>{`${data.city ? data.city : data.town} ul  ${data.road} ${
      data.house_number ? data.house_number : ""
    }`}</h3>
  ) : (
    <h1>nie działa</h1>
  );
};

export default AddresInfo;
