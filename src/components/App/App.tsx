import { FC } from "react";
import AppProvider from "~components/AppProvider/AppProvider";
import AppWrapper from "~components/AppWrapper/AppWrapper";

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};

export default App;
