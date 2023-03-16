import React, { useEffect, useState } from "react";
import Navbar from "../core/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SignInUser, getUserById } from "../features/Auth/AuthSlice";

function Login() {
  const navigate = useNavigate();
  const { authenticated, user, isSuccess, isError } = useSelector(
    (state) => state.user
  );
  console.log(isSuccess);
  const dispatch = useDispatch();

  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getUserById(userFromLocalStorage?._id));
  }, [userFromLocalStorage?._id]);

  const [password, setPasword] = useState("");
  const [Email, setEmail] = useState(userFromLocalStorage?.email);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: Email,
        password,
      };
      if (user !== null && authenticated && isSuccess && !isError) {
        console.log("executed");

        dispatch(SignInUser(payload));
        return navigate("/");
      }
      setEmail();
      setPasword("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" mx-3 p-2 border bg-white shadow-md flex flex-col items-center md:mx-10">
        <div className="flex flex-col space-y-4">
          <h1 className="text-center">Create New Account</h1>
          <h3 className="text-center">Start For Free</h3>

          <p className="text-[17px] mb-3">
            Already a member? <Link to={"/login"}>Log In</Link>
          </p>
        </div>

        <div className="mt-4">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                value={password}
                onChange={(e) => setPasword(e.target.value)}
                name="password"
              />
            </div>

            <div className="flex justify-center my-4">
              <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
