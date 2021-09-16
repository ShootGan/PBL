import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
interface PageProperties {
  children: ReactNode;
  title?: string;
}

const Page: FC<PageProperties> = ({
  children,
  title,
}: PageProperties): JSX.Element => {
  const concatTitle: string = title ? ` - ${title}` : "";
  const fixedTitle: string = `Śląska wyprawa${concatTitle}`;
  return (
    <>
      <Helmet>
        <title>{fixedTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Page;
