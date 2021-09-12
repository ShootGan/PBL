import { useState } from "@hookstate/core";

interface FreeThingsProperties {
  freeParking: null | boolean;
  freeEntry: boolean;
  easyAcces: boolean;
}
const FreeThings = ({
  freeParking,
  freeEntry,
  easyAcces,
}: FreeThingsProperties) => {
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
