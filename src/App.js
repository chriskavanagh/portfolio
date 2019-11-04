import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Slideshow from "./components/Slideshow";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";
import MyNav from "./components/MyNav";
import { Route, Switch } from "react-router-dom";
import CarosouelExample from "./components/Reveal";
import "./App.css";
import Text from "./components/Text";

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
