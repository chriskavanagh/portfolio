import React from "react";
import Main from "./components/Main";
import TopNav from "./components/TopNav";
import MyNav from "./components/MyNav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <MyNav />
      <Main />
    </div>
  );
}

export default App;
