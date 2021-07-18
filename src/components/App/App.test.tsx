import { FC } from "react";
import { expectType } from "tsd";
import App from "./App";

describe("App", (): void => {
  it("Has correct type", (): void => {
    expectType<FC>(App);
  });
});
