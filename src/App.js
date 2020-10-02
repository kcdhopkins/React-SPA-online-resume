import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {history} from './history';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/home.js";
import Educationpage from "./pages/education.js";
import Header from "./HeadersFooters/header/headers";
import Footer from "./HeadersFooters/footer/footers";
import Clubandorganization from "./pages/clubandorganization";
import Workhistory from "./pages/workhistory";

const App = () => {

  const mainDivStyle = {
    flex: "1"
  }
  return (
    <BrowserRouter history = {history}>
      <Header/>
      <div style ={mainDivStyle}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/education" component={Educationpage} />
          <Route path="/workhistory" component={Workhistory} />
          <Route path="/clubandorganization" component={Clubandorganization} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
