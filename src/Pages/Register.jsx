import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();




  const handleRegister = () => {

    if(!username || !email || !password) {
      toast.error("Fill the required Filed", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    axios
      .post(`https://blogserver-bskv.onrender.com/api/auth/register`, {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log('clicked');
        toast.success("Register Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPassword(res.data.password);
        navigate("/");
      })
      .catch((err) => {
        console.log('not working');
        toast.error("User already exists", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 container_cad">
              <h1 className="text-center mb-4">Create an account</h1>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
                placeholder="Enter your unique username"
                className="form-control mb-3 p-3"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="form-control mb-3 p-3"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                placeholder="Enter your password"
                className="form-control mb-3 p-3"
              />
              <button
                className="btn btn-danger  btn-block mb-3 "
                style={{fontSize :"1.4rem", fontFamily :"poppins"}}
                onClick={handleRegister}
              >
                Register
              </button>
              <div className="text-center">
                <p className="text-muted">
                  Already have an account?{" "}
                  <Link to="/" className="text-success" style={{fontSize:"1.4rem"}}>
                    Login
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

export default Register;
