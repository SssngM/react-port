import React from 'react';
import casestudy from "../../imges/casestudy.jpg";
import GroupFive2 from "../../imges/GroupFive2.jpg";
import Habble from "../../imges/Habble.jpg";
import { Link} from 'react-router-dom';
import icon from "../../imges/icon.jpg";

function FullSizeImage() {
  return (


    <div>
      <Link to="/"  className= 'custom-link1' > 
       Back
      </Link>
    <div >
      <img src={GroupFive2} style={{ maxWidth: '100%', backgroundColor: 'white', objectFit: 'contain', paddingTop:'5%' }} alt="Full Size Image" /> 
      {/* <a href={casestudy} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} target="_blank" rel="noopener noreferrer"> Cast Study </a> */}
    </div>
    </div>
  );
}



export default FullSizeImage;



// import React from 'react';
// import exampleImage from "../../imges/casestudy.jpg";

// function FullSizeImage() {
//   const openImage = () => {
//     const width = window.screen.width;
//     const height = window.screen.height;
//     const top = '20px';
//     const alignItems = 'center'
//     const url = exampleImage;
//     const params = `width=${width},height=${height},alignItems=${alignItems},top=${top},resizable=yes,scrollbars=yes,status=yes`;

//     window.open(url, '_blank', params);
//   };

//   return (
//     <div className='casestudy'>
//       <a href="#" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onClick={openImage}>View Full Size Image</a>
//     </div>
//   );
// }

// export default FullSizeImage


