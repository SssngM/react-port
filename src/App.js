import React from 'react';
import './App.css';
import Intro from "./components/intro/intro"
import Productlist from "./components/productlist/productlist"
import About from "./components/about/about"
import Skill from "./components/skill/skill"

function App() {
  return (

    <div className="App">
      <Intro/>
      <Productlist/>
      <About/>
      <Skill/>
    </div>
  );
}

export default App;
