import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";
import DigitalAgency from "./pages/DigitalAgency";
import LocationVoiture from "./pages/LocationVoiture";
import Gallery from "./elements/gallery/Gallery";
import "./assets/scss/style.scss";
import Reservation from "./pages/Reservation";
import Contact from "./elements/contact/Contact";

const App = () => {
  return (

      <Router>
        <PageScrollTop>
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL + "/"}`}
              exact
              component={DigitalAgency}
            />
            <Route 
            path={`${process.env.PUBLIC_URL + "/Reservation"}`}
            component={Reservation}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/Location-Voiture"}`}
              exact
              component={LocationVoiture}
            />
           
            <Route
              path={`${process.env.PUBLIC_URL + "/gallery/:id"}`}
              exact
              component={Gallery}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/contact"}`}
              exact
              component={Contact}
            />
          </Switch>
        </PageScrollTop>
      </Router>
  );
};

export default App;
