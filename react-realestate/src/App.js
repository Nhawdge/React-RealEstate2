import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import SortByContent from "./SortByContent";
import LandingPageCards from "./LandingPageCards";
import LandingPageCards1 from "./LandingPageCards1";
import LandingPageCards2 from "./LandingPageCards2";
import ImgOverlay from "./ImgOverlay";
import Agents from "./Agents";
import LandingPage from "./LandingPage";
import Page2 from "./Page2";
import PhiOverlay from "./PhiOverlay";
import AgentJohnProfile from "./AgentJohnProfile";
import TestPage3 from "./TestPage3";
import ContactUs from "./ContactUs";
import BlogList from "./BlogList";
function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <div className="landing_page">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/Page2">
              <Page2 />
            </Route>
            <Route exact path="/AgentJohnProfile">
              <AgentJohnProfile />
            </Route>
            <Route exact path="/TestPage3">
              <TestPage3 />
            </Route>
            <Route exact path="/ContactUs">
              <ContactUs />
            </Route>
            <Route exact path="/BlogList">
              <BlogList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
