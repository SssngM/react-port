import React from 'react';
import Intro from "../intro/intro"
import Productlist from "../productlist/productlist"
import About from "../about/about"
import Skill from "../skill/skill"


function Home() {
    return (
    <div >
        <Intro/>
        <Productlist/>
        <About/>
        <Skill/>
    </div>
    );
}  


 export default Home;