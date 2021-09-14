import { FC, ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
const queryClient: QueryClient = new QueryClient();
interface AppProviderProperties {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProperties> = ({
  children,
}: AppProviderProperties) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
