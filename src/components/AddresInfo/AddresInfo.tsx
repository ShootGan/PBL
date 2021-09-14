import { FC } from "react";
import { useQuery, UseQueryResult } from "react-query";

interface AddresInfoProperties {
  objectId: number;
}

const AddresInfo: FC<AddresInfoProperties> = ({
  objectId,
}: AddresInfoProperties): JSX.Element => {
  const { data, isLoading }: UseQueryResult<any, Error> = useQuery(
    ["location", objectId],
    async (): Promise<any> => {
      const response: Response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/osm/city/${objectId}`,
      );
      return await response.json();
    },
  );

  return !isLoading && data ? (
    <h1>{`${data.city ? data.city : data.town} ul  ${data.road} ${
      data.house_number ? data.house_number : ""
    }`}</h1>
  ) : (
    <h1>nie działa</h1>
  );
};

export default AddresInfo;
