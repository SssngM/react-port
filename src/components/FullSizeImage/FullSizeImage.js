import React from 'react';
import casestudy from "../../imges/casestudy.jpg";
import { Link} from 'react-router-dom';
import icon from "../../imges/icon.jpg";

function FullSizeImage() {
  return (


    <div className='casestudy'>
      <Link to="/"> <img src={icon}  style={{ width: '1.5rem', height: '1.5rem'}} /> </Link>
    <div >
      <img src={casestudy} style={{ maxWidth: '100%', backgroundColor: 'white', objectFit: 'contain' }} alt="Full Size Image" /> 
      {/* <a href={casestudy} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} target="_blank" rel="noopener noreferrer"> Cast Study </a> */}
    </div>
    </div>
  );
}


export default FullSizeImage



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



// import React from 'react';
// import exampleImage from "../../imges/casestudy.jpg";

// function FullSizeImage() {
//   const openImage = () => {
//     const url = exampleImage;
//     window.open(url, '_blank');
//   };

//   return (
//     <div object width="100%" height= '100%'  >
//       <a href="#" onClick={openImage} style={{ maxWidth: '100%', maxHeight: '100%' }}>View Full Size Image</a>
//     </div>
//   );
// }

// function FullSizeImage() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <img src={exampleImage} style={{ maxWidth: '100%', maxHeight: '100%' }} /> View Full Size Image
//     </div>
//   );
// }

// export default FullSizeImage