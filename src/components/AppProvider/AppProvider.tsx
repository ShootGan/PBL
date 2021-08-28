import { FC, ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
interface AppProviderProperties {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProperties> = ({
  children,
}: AppProviderProperties) => {
  return (
    <HelmetProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
  );
};

export default AppProvider;
