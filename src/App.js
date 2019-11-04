import React from "react";
import Home from "./components/Home";
import Text from "./components/Text";
import About from "./components/About";
import MyNav from "./components/MyNav";
import TopNav from "./components/TopNav";
import Contact from "./components/Contact";
import Slideshow from "./components/Slideshow";
import { Route, Switch } from "react-router-dom";
import CarosouelExample from "./components/Reveal";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <TopNav />
      <MyNav />

      <Switch>
        <Route path="/about" component={CarosouelExample} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Text} />
      </Switch>
    </div>
  );
}

export default App;
