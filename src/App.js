import React from 'react';
import './App.css';
import Home from "./components/home/home"
import Intro from "./components/intro/intro"
// import Productlist from "./components/productlist/productlist"
// import About from "./components/about/about"
// import Skill from "./components/skill/skill"
// import Product2 from "./components/product2/product2"
import FullSizeImage from "./components/FullSizeImage/FullSizeImage"
import { BrowserRouter, Router, Switch, Routes,Route} from 'react-router-dom';


function App() {
  return (
    
    <div style={{ margin:0}}> 
    <BrowserRouter>
    {/* <div className="App">
        <Intro/>
        <Productlist/>
        <About/>
        <Skill/>
    </div> */}

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/image" element={<FullSizeImage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
