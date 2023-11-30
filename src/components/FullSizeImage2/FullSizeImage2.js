import React from 'react';
import  Habble from "../../imges/habble-CS.jpg";
import { Link} from 'react-router-dom';
import icon from "../../imges/icon.jpg";



function FullSizeImage2() {
    return (
  
  
      <div>
        <Link to="/"  className="custom-link1" > 
         Back
        </Link>
      <div >
        <img src={Habble} style={{ maxWidth: '100%', marginTop:'1%',backgroundColor: 'white', objectFit: 'contain' }} alt="Full Size Image" /> 
        
        {/* <a href={casestudy} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} target="_blank" rel="noopener noreferrer"> Cast Study </a> */}
      </div>
      </div>
    );
  }
  
  export default FullSizeImage2;
  