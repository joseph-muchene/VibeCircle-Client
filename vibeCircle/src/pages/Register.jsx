import React, { useState } from "react";
import Navbar from "../core/Navbar";
import { Link } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [secondName, setSecondName] = useState("");
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
          <form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                value={firstName}
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
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                value={email}
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline:none focus:shadow-outline"
                value={password}
                name="password"
              />
            </div>

            <div className="flex justify-center my-4">
              <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Create Account
              </button>
            </div>

            <div className="flex justify-center ">
              <button className="text-white bg-gray-700 hover:bg-[#3b5]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Create Account With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
