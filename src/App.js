import React from 'react';
import './App.css';
import Intro from "./components/intro/intro"
import Productlist from "./components/productlist/productlist"

function App() {
  return (

    <div className="App">
      <Intro/>
      <Productlist/>
    </div>
  );
}

export default App;
