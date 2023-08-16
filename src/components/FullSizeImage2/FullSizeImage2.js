import React from 'react';
import  Habble from "../../imges/habble-CS.jpg";
import { Link} from 'react-router-dom';
import icon from "../../imges/icon.jpg";



function FullSizeImage2() {
    return (
  
  
      <div>
        <Link to="/"  style={{ width: '1.5rem', height: '1.5rem', margin:'9%', backgroundColor:'rgb(0 0 0)'}} > 
         Back
        </Link>
      <div >
        <img src={Habble} style={{ maxWidth: '100%', backgroundColor: 'white', objectFit: 'contain' }} alt="Full Size Image" /> 
        {/* <a href={casestudy} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} target="_blank" rel="noopener noreferrer"> Cast Study </a> */}
      </div>
      </div>
    );
  }
  
  export default FullSizeImage2;
  