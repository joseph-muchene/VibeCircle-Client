import React, { useEffect, useState } from "react";
import Friends from "./Friends";
import Navbar from "../core/Navbar";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { getUserById, updateUser } from "../features/Auth/AuthSlice";
function Settings() {
  const { user } = useSelector((state) => state.user);

  const [toggle, setToggle] = useState(false);
  const [firstName, setFirstName] = useState(user?.name?.split(" ")[0]);
  const [secondName, setSecondName] = useState(user?.name?.split(" ")[1]);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: firstName + " " + secondName,
      email,
      password,
    };
    const payload = {
      id: user._id,
      data,
    };

    dispatch(updateUser(payload));
  };

  window.localStorage.setItem("auth", JSON.stringify(user && user));

  return (
    <div>
      <Navbar />
      <div className="mx-10">
        <div className="flex flex-col md:grid grid-cols-3">
          <div>
            <Search />
          </div>
          <div>
            <div className="md:mt-[4rem] ">
              <h1 className="text-center my-3 text-xl">Update Profile</h1>
              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                    name="firstName"
                  />
                </div>

                <div>
                  <label htmlFor="secondName">Second Name</label>
                  <input
                    type="text"
                    value={secondName}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                    name="secondName"
                    onChange={(e) => setSecondName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                    name="email"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    value={password}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-center my-4">
                  <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    update Account
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <button
              onClick={() => setToggle(!toggle)}
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              {toggle ? "hide friends" : "show friends"}
            </button>
            {toggle && <Friends hideNav={true} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
