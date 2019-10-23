import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";
import MyNav from "./components/MyNav";
import { Route, Switch } from "react-router-dom";
import MyCarousel from "./components/Carousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <MyNav />
      <MyCarousel axis={"horizontal"} dynamicHeight={true} />
      {/* <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch> */}
    </div>
  );
}

export default App;
