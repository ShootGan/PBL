import { FC } from "react";
import NavbarTitle from "~root/components/Navbar/NavbarTitle";
import NavbarWrapper from "~root/components/Navbar/NavbarWrapper";

const Navbar: FC = (): JSX.Element => {
  return (
    <NavbarWrapper>
      <NavbarTitle>Śląska Wyprawa</NavbarTitle>
    </NavbarWrapper>
  );
};

export default Navbar;
