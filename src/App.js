import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homepage from "./pages/home.js";
import educationpage from "./pages/education.js";
import Header from "./HeadersFooters/header/headers";
import Footer from "./HeadersFooters/footer/footers";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={homepage} />
        <Route path="/education" component={educationpage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
