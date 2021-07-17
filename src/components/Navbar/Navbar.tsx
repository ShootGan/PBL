import { FC } from "react";
import NavbarTitle from "~components/NavbarTitle/NavbarTitle";
import NavbarWrapper from "~components/NavbarWrapper/NavbarWrapper";

const Navbar: FC = (): JSX.Element => {
  return (
    <NavbarWrapper>
      <NavbarTitle>Śląska Wyprawa</NavbarTitle>
    </NavbarWrapper>
  );
};

export default Navbar;
