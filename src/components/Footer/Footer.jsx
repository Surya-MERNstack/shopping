import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whatup from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta} alt="" srcset="" />
        </div>
        <div className="footer-icons-container">
            <img src={pin} alt="" srcset="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatup} alt="" srcset="" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All right Reserved</p>
      </div>
    </div>
  )
}
export default Footer


// import React from 'react';
// import footer_logo from '../Assets/logo_big.png';
// import insta from '../Assets/instagram_icon.png';
// import pin from '../Assets/pintester_icon.png';
// import whatup from '../Assets/whatsapp_icon.png';

// const Footer = () => {
//   return (
//     <footer className="bg-light py-5 mt-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <div className="d-flex align-items-center">
//               <img src={footer_logo} alt="" className="me-3" />
//               <p className="m-0 fs-3">SHOPPER</p>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <ul className="list-unstyled d-flex gap-5 m-0">
//               <li>Company</li>
//               <li>Products</li>
//               <li>Offices</li>
//               <li>About</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div className="col-md-3 d-flex justify-content-md-end">
//             <div className="d-flex gap-3">
//               <div className="footer-icons-container">
//                 <img src={insta} alt="" className="img-fluid" />
//               </div>
//               <div className="footer-icons-container">
//                 <img src={pin} alt="" className="img-fluid" />
//               </div>
//               <div className="footer-icons-container">
//                 <img src={whatup} alt="" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 mt-4">
//             <hr className="bg-secondary" />
//             <p className="text-center text-secondary m-0">Copyright @2023 - All right Reserved</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
