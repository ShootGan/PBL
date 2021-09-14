import { useState } from "@hookstate/core";
import FreeThingsUnorderedList from "./FreeThingsUnorderedList";
import FreeThingsOrderedList from "./FreeThingsOrderedList";

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
      <FreeThingsUnorderedList>
        <FreeThingsOrderedList>
          Darmowy parking {freeParking ? "✔️" : "❌"}
        </FreeThingsOrderedList>
        <FreeThingsOrderedList>
          Darmowe wejście {freeEntry ? "✔️" : "❌"}
        </FreeThingsOrderedList>
        <FreeThingsOrderedList>
          Łatwy dostęp {easyAcces ? "✔️" : "❌"}
        </FreeThingsOrderedList>
      </FreeThingsUnorderedList>
    </div>
  );
};
export default FreeThings;
