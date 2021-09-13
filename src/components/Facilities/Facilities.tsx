import { useQuery } from "react-query";

const Facilities = ({ objectId }: number) => {
  const { data: disabilitiesData, isLoading: disabilitiesIsLoading } = useQuery(
    ["disabilitiesData", objectId],
    async () => {
      const response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/disabilities/${objectId}`,
      );
      const dataa = await response.json();
      console.log(dataa);
      return dataa;
    },
  );
  const { data: discountData, isLoading: discountIsLoading } = useQuery(
    ["discounnData", objectId],
    async () => {
      const response = await fetch(
        `https://slaska-wyprawa-backend.herokuapp.com/discount/${objectId}`,
      );
      const dataa = await response.json();
      console.log(dataa);
      return dataa;
    },
  );

  return (
    <div>
      {disabilitiesData?.DisabilitiesList &&
        disabilitiesData.DisabilitiesList.map((element, index) => {
          return <div key={index}>{element}</div>;
        })}
      {disabilitiesData?.DiscountList &&
        disabilitiesData.DiscountList.map((element, index) => {
          return <div key={index}>{element}</div>;
        })}
    </div>
  );
};
export default Facilities;
