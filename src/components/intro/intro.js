import React from "react";
import "./intro.css";
import Introimg from "../../imges/intromac2.jpg";
import Ani from "../../imges/port_ani.gif"
import background from "../../imges/background.jpg"
import mesh from "../../imges/mesh.jpg"
import Pdf from '../../imges/SeungYoo-resume.pdf';
// import Pdf from '../../imges/habble case study.pdf'
import { Link} from 'react-router-dom';
import Aboutme from "../../imges/about.jpg";


function Intro(props) {
  return (
    <div  className="intro1" > 
     {/* style={{ backgroundImage:`url(${background})`, maxWidth: '100%',backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
    {/* <div> */}
    <div>
    {/* <div className="bg-words"> 
    <button className="btn3">USABILITY  </button>  <button className="btn2"> WIREFRAME  </button> <button className="btn3"> USER-RESEARCH </button>  <button className="btn2"> USER-FLOW </button>  
    <button className="btn1">ACCESSIBILITY  </button>  <button className="btn2"> ANALYSIS  </button> <button className="btn3"> TESTING </button>  <button className="btn2">PERSONA</button> 
    <button className="btn1">JOURNEY  </button>  <button className="btn2"> EMPATHY  </button> <button className="btn3"> ITERATIVE </button>  <button className="btn4">HIERARCHY</button> 
    <button className="btn1">VISUAL  </button>  <button className="btn2"> TYPOGRAPHY  </button> <button className="btn3">  COLOR-PALETTE </button>  <button className="btn4">CONSISTENCY</button> 
    <button className="btn1">RESPONSIVE  </button>  <button className="btn2"> CREATIVE  </button> <button className="btn3"> ORGANIC </button>  <button className="btn4">ARTISTIC</button> 
    <button className="btn4">NATURAL  </button>  <button className="btn3"> BALANCE  </button> <button className="btn2"> COLLABORATIVE </button>  <button className="btn1">STAKEHOLDERS</button> 
    <button className="btn1">BRAND  </button>  <button className="btn0"> INTERFACE  </button> <button className="btn3"> FRONTEND </button>  <button className="btn4">B2B</button> 
    <button className="btn1">IDEA  </button>  <button className="btn2"> PRODUCT  </button> <button className="btn3"> COMPONENT </button>  <button className="btn4">DESING SYSTEM</button> 
    <button className="btn1">HOT POTATO  </button>  <button className="btn2"> GIT  </button> <button className="btn3"> CODE </button>  <button className="btn1">NETWORK</button>        
    <button className="btn4">PIVOT  </button>  <button className="btn3"> EXPRESSIVE  </button> <button className="btn1"> VISIONARY </button>  <button className="btn1">IMAGINATIVE</button>
    <button className="btn4">TECHNICAL  </button>  <button className="btn3"> TREND  </button> <button className="btn2"> SUSTAINABLE </button>  <button className="btn1">STORYTELLING</button>  
    <button className="btn1">JOURNEY  </button>  <button className="btn2"> EMPATHY  </button> <button className="btn3"> ITERATIVE </button>  <button className="btn4">HIERARCHY</button> 
    <button className="btn1">BRAND  </button>  <button className="btn2"> INTERFACE  </button> <button className="btn3"> FRONTEND </button>  <button className="btn4">B2B</button>
    <button className="btn4">PIVOT  </button>  <button className="btn3"> TREND  </button> <button className="btn2"> SUSTAINABLE </button>  <button className="btn1">STORYTELLING</button>
    <button className="btn4">CRAFTSMANSHIP  </button>  <button className="btn3"> INTUITIVE  </button> <button className="btn2"> BRAND </button>  <button className="btn2">COLOR SCHEMES</button>
    <button className="btn4">UI ELEMENTS  </button>  <button className="btn3"> LAYOUT  </button> <button className="btn2"> BUTTON</button>  <button className="btn1"> STYLES </button>
    <button className="btn1">JOURNEY  </button>  <button className="btn2"> EMPATHY  </button> <button className="btn3"> ITERATIVE </button> 
     */}
    {/* <div className="resume"><a href = {Pdf} target = "_blank"  >Resume</a></div> */}
      <div className="i-left">
      {/* <div className="resume"><a href = {Pdf} target = "_blank">Resume</a></div> */}
        {/* <div className="i-hello">Hello! I am </div> */}
          {/* <h2 className="i-name"> Seung Yoo</h2> */}
      </div>
      <div className="i-right">

        {/* <img src={Introimg} className="intro-img" /> */}
        {/* <video controls autoPlay loop muted>
          <source src={myVideo} type="video/mp4"></source>
        </video> */}
        {/* <img src={Ani} alt="loading..." /> */}
      {/* </div> */}
    </div>
    {/* <div className="i-lines">
      <div className="intro-line"></div>
      <div className="intro-line0"></div>
      <div className="intro-line1"></div>
      <div className="intro-line2"></div>
      <div className="intro-line3"></div>
    </div> */}
    </div>

    {/* <div className="title-item">PRODUCT DESIGNER</div>  */}
    {/* <div className="title-item">UX ENGINEERING SKILLS</div> */}
    
    <div className="i-title">
    <div className="title">
    <div className="titleSec">
    <h2 className="i-name"> SEUNG YOO</h2>
    <h2 className="i-name"> PRODUCT DESIGNER</h2>
    <h2 className="i-name"> UX ENGINEER</h2>
    </div>
    </div>
    </div>


          <div className="title-sub"> Easy, Simple, Fun  </div>
            {/* <div className="title-sub">-ALBERT EINSTEIN </div> */}

  </div>
  );
}

export default Intro;
