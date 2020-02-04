import React from "react";
import { Route, Switch } from 'react-router-dom';
import homepage from "./pages/home.js";
import educationpage from "./pages/education.js";
import Header from "./HeadersFooters/headers";
import Footer from "./HeadersFooters/footers";

const App = ( ) => {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path = "/" component = {homepage} />
                <Route path="/education" component = {educationpage} />
            </Switch>
            <Footer />
        </div>
        
    );
}

export default App;