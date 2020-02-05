import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homepage from "./pages/home.js";
import educationpage from "./pages/education.js";
import Header from "./HeadersFooters/header/headers";
import Footer from "./HeadersFooters/footer/footers";
import clubandorganization from "./pages/clubandorganization";
import workhistory from "./pages/workhistory";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={homepage} />
        <Route path="/education" component={educationpage} />
        <Route path="/workhistory" component={workhistory} />
        <Route path="/clubandorganization" component={clubandorganization} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
