import { Switch, Route, Redirect } from "react-router-dom";
import Home from "~root/pages/Home/Home";
import Location from "~root/pages/Location/Location";
import Navbar from "~root/components/Navbar/Navbar";
import GlobalStyle from "~root/components/GlobalStyle/GlobalStyle";
import { FC } from "react";

const AppWrapper: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/location/:objectId" component={Location} />
        <Route render={(): JSX.Element => <Redirect to="/" />} />
      </Switch>
    </>
  );
};

export default AppWrapper;
