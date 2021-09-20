import { FC } from "react";
import { useQuery, UseQueryResult } from "react-query";

interface FacilitiesProperties {
  objectId: number;
}

const Facilities: FC<FacilitiesProperties> = ({
  objectId,
}: FacilitiesProperties): JSX.Element => {
  const {
    data: disabilitiesData,
    isLoading: disabilitiesIsLoading,
  }: UseQueryResult<any, Error> = useQuery(
    ["disabilitiesData", objectId],
    async (): Promise<any> => {
      const response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/disabilities/${objectId}`,
      );
      return await response.json();
    },
  );

  const {
    data: discountData,
    isLoading: discountIsLoading,
  }: UseQueryResult<any, Error> = useQuery(
    ["discounnData", objectId],
    async (): Promise<any> => {
      const response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/discount/${objectId}`,
      );

      return await response.json();
    },
  );

  return (
    <div>
      {disabilitiesData?.DisabilitiesList &&
        disabilitiesData.DisabilitiesList.map(
          (element: string | number, index: number): JSX.Element => {
            return <div key={index}>{element}</div>;
          },
        )}
      {discountData?.DiscountList &&
        discountData.DiscountList.map(
          (element: string | number, index: number): JSX.Element => {
            return <div key={index}>{element}</div>;
          },
        )}
    </div>
  );
};
export default Facilities;
