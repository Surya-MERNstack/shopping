import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Assets/Navbar/Navbar";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
  const navigate = useNavigate();
  const userId = useParams();
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();
  const [userIdx, setUserIdx] = useState("");
  const [updated, setUpdated] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    setConfirmDelete(true);
  };
  const cancelDelete = () => {
    setConfirmDelete(false);
  };

  const doDelete = async () => {
    try {
      await axios
        .delete(`https://blogserver-bskv.onrender.com/api/users/user/` + userId.id)
        .then((res) => {
          // console.log('user deleted!')
          toast.success("user deleted", {
            position : toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
          axios
            .get(`https://blogserver-bskv.onrender.com/api/auth/logout`)
            .then((response) => {
              navigate("/login");
            })
            .catch((err) => {
              toast.error("Try again", {
                position : toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            });
          navigate("/login");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserData = async () => {
    axios
      .get(`https://blogserver-bskv.onrender.com/users/user/` + userId.id)
      .then((res) => {
        setUserIdx(res.data._id);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPassword(res.data.password);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [userId.id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newUser.profilePic = filename;
      // console.log(newUser);
      try {
        await axios.post(`https://blogserver-bskv.onrender.com/api/upload`, data);
      } catch (err) {
        // console.log(err);
      }
    }
    try {
      const res = await axios.put(
        `https://blogserver-bskv.onrender.com/api/users/user/` + userId.id,
        newUser
      );
      fetchUserData();
      // console.log(res.data);
      setUpdated(true);
      navigate("/profile/" + res.data._id);
      //  setUpdated(false)
    } catch (err) {
      // console.log(err);
      setUpdated(false);
    }
  };

  // console.log(userId.id)
  const fetchPosts = () => {
    axios
      .get(`https://blogserver-bskv.onrender.com/api/posts/all/` + userId.id)
      .then((res) => {
        // console.log(res.data)
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [userId.id]);
  return (
    <div>
      <Navbar />
      {confirmDelete ? (
        <div className="h-screen flex justify-center items-center ">
          <div className="flex flex-col px-20 py-10 md:px-40 md:py-20 border-2 border-solid shadow-md rounded-xl ">
            <h3 className="text-lg font-bold">Are you sure?</h3>
            <div className="flex justify-center items-center  space-x-4 mt-4">
              <button
                onClick={doDelete}
                className="bg-green-500 px-4 py-2 text-white hover:bg-white hover:text-black hover:delay-75 hover:duration-75 ease-linear hover:border-2 hover:rounded-xl delay-75 duration-75 hover:border-solid font-semibold hover:border-green-700 rounded-md"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-red-500 px-4 py-2 text-white hover:bg-white hover:text-black hover:delay-75 hover:duration-75 ease-linear hover:border-2 hover:rounded-xl delay-75 duration-75 hover:border-solid font-semibold hover:border-red-700 rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" px-6 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse">
          <div className="flex flex-col md:w-[70%]">
            <h1 className="text-xl font-bold mt-16 md:mt-0 ">Your Posts:</h1>
          </div>

          <div className="flex flex-col space-y-4 md:w-[30%] md:mb-16 md:items-end">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl mb-6">Your Profile:</h1>
              <img
                src={user.photo ? "user": ""}
                alt=""
                className="h-[200px] w-[200px] bg-gray-600 rounded-lg mb-4"
              />
              <div className="flex flex-col w-full space-y-4">
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  placeholder="upload image"
                />
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="outline-none px-4 py-2 text-gray-500"
                  type="text"
                  placeholder={user.username}
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="outline-none px-4 py-2 text-gray-500"
                  type="text"
                  placeholder={user.email}
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  className="text-gray-500 outline-none px-4 py-2"
                  placeholder={user.password}
                />
              </div>
              <div className="flex  items-center space-x-4 mt-8">
                <button
                  onClick={handleUpdate}
                  className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400"
                >
                  Update details
                </button>
                <button
                  className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400"
                  onClick={handleDelete}
                >
                  Delete Profile
                </button>
                <div>
                  {updated ? (
                    <div className="text-md font-bold text-green-500">
                      Details updated successfully
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
