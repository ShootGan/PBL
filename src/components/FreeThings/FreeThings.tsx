import { FC } from "react";

interface FreeThingsProperties {
  freeParking: null | boolean;
  freeEntry: boolean;
  easyAcces: boolean;
}
const FreeThings: FC<FreeThingsProperties> = ({
  freeParking,
  freeEntry,
  easyAcces,
}: FreeThingsProperties): JSX.Element => {
  return (
    <div>
      <ul>
        <li>Darmowy parking {freeParking ? "✔️" : "❌"}</li>
        <li>Darmowe wejście {freeEntry ? "✔️" : "❌"}</li>
        <li>Łatwy dostęp {easyAcces ? "✔️" : "❌"}</li>
      </ul>
    </div>
  );
};
export default FreeThings;
