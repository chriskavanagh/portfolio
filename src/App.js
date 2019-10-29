import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Slideshow from "./components/Slideshow";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";
import MyNav from "./components/MyNav";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <MyNav />

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Slideshow} />
      </Switch>
    </div>
  );
}

export default App;
