// // import React from 'react'
// // import './Hero.css'
// // import hand_icon from '../Assets/hand_icon.png'
// // import arrow_icon from '../Assets/arrow.png'
// // import hero_img from '../Assets/hero_image.png'

// // const Hero = () => {
// //   return (
// //     <div className='hero'>
// //       <div className='hero-left'>
// //        <h2>New Arrivals Only</h2>
// //        <div>
// //         <div className="hand-hand-icon">
// //             <p>new</p>
// //             <img src={hand_icon} alt="" />
// //         </div>
// //         <p>collections</p>
// //         <p>for everyone</p>
// //        </div>
// //        <div className='hero-latest-btn'>
// //         <div>Latest Collection</div>
// //         <img src={arrow_icon} alt="" srcset="" />
// //        </div>
// //       </div>
// //       <div className="hero-right">
// //         <img src={hero_img} alt="" srcset="" />
// //       </div>
// //     </div>
// //   )
// // }

// // export default Hero

// import React from 'react';
// import hand_icon from '../Assets/hand_icon.png';
// import arrow_icon from '../Assets/arrow.png';
// import hero_img from '../Assets/hero_image.png';
// import './Hero.css'

// const Hero = () => {
//   return (
//     <div className="container-fluid hero">
//       <div className="row">
//         <div className="col-md-6 d-flex flex-column justify-content-center gap-3 px-md-5">
//           <h2 className="text-dark fs-4 fw-bold">New Arrivals Only</h2>
//           <div className="d-flex align-items-center gap-3">
//             <div className="d-flex align-items-center gap-3 hand-hand-icon">
//               <p className="m-0">new</p>
//               <img src={hand_icon} alt="" className="img-fluid" />
//             </div>
//             <p className="m-0">collections</p>
//             <p className="m-0">for everyone</p>
//           </div>
//           <div className="d-flex align-items-center gap-3 btn btn-primary rounded-pill px-4 py-2 hero-latest-btn">
//             <div className='px-5 bg-primary'>Latest Collection</div>
//             <img src={arrow_icon} alt="" className="img-fluid" />
//           </div>
//         </div>
//         <div className="col-md-6 d-flex align-items-center justify-content-center">
//           <img src={hero_img} alt="" className="img-fluid" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" hero">
      <div className="row ">
        <div className="col-md-6 d-flex flex-column justify-content-center gap-3 px-md-5 ">
          <h2 className="text-dark  fw-bold" style={{fontSize:"xxx-large"}}>New Arrivals Only</h2>
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-3 hand-hand-icon">
              <p className="m-0 fw-bold" style={{fontSize:"xx-large"}}>new</p>
              {/* <img src={hand_icon} alt="" className="img-fluid" /> */}
            </div>
            <p className="m-0 fw-bold " style={{fontSize:"xx-large"}}>collections</p>
            <p className="m-0 fw-bold" style={{fontSize:"xx-large"}}>for everyone</p>
          </div>
          <div className="d-flex align-items-center gap-3 btn btn-danger rounded-pill px-4 py-2 hero-latest-btn">
            <Link to='/mens' style={{textDecoration : "none"}}>
              {" "}
              <div className="px-2 text-white " style={{fontSize:"larger"}}>Latest Collection</div>
            </Link>
            <img src={arrow_icon} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center  justify-content-center">
          <img src={hero_img} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
