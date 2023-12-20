// import React from 'react'
// import './CSS/LoginSingup.css'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const navigate = useNavigate()
//     const handle = () => {
//       navigate('/shop')
//     }
//   return (
//     <div className='loginsingup'>
//       <div className="loginsingup-container">
//         <h1 className='text-danger'>Log In</h1>
//         <div className='loginsigup-fields'>
//           {/* <input type="text" placeholder='Your name' /> */}
//           <input type="email" placeholder='Email Address' value="kakshi@gmail.com"/>
//           <input type="password" placeholder='Password' value = "123"/>
//         </div>
//         <button onClick={() => handle()}>Continue</button>
//         <p className='loginsignup-login'>Already have an account <span>Login here</span></p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' required id=''/>
//           <p>By Continuing, I agree to the terms of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login


import { Link } from "react-router-dom";
import { useState, useContext ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Pages/CSS/Login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const emails = "redlitmusecom@gmail.com"
  const pass = "redlitmus@123"

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    if(!email || !password){
      return toast.error("fill the required fields", {
          position : toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      })
    }
    try {
      const res = await axios.post(`https://blogserver-bskv.onrender.com/api/auth/login`, { email, password });
      toast.success("Login Successfully", {
        position : toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
      navigate("/shop");
    } catch (err) {
      setError(true);
      toast.error("Credentials Wrong ,Try again!!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };



  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 container_cad">
            <h1 className="text-center mb-4">Log In with your account</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="form-control mb-3 p-3"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="form-control mb-3 p-3"
            />
            <button
              className="btn btn-danger btn-block mb-3"
              style={{ fontSize: "1.4rem", fontFamily: "poppins" }}
              onClick={handleLogin}
            >
              Log In
            </button>
            <div className="text-center">
              <p className="text-sm text-black">New here?</p>
              <p className="font-semibold text-black">
                <Link to="/register" className="text-success" style={{fontSize:"1.4rem"}}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Login;
