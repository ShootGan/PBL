import { Switch, Route, Redirect } from "react-router-dom";
import Home from "~root/pages/Home/Home";
import Navbar from "~root/components/Navbar/Navbar";
import GlobalStyle from "~root/components/GlobalStyle/GlobalStyle";

const AppWrapper = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
};

export default AppWrapper;
