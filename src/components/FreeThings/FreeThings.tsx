import { FC } from "react";
import { useState } from "@hookstate/core";
import FreeThingsUnorderedList from "./FreeThingsUnorderedList";
import FreeThingsOrderedList from "./FreeThingsOrderedList";

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
