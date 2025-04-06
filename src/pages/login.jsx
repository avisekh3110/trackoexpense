import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(`Email: `, email);
    console.log(`Password: `, password);
  };

  return (
    <div className="bg-primary-b h-screen flex justify-center items-center">
      <Navbar />
      <div className="bg-tertiary-a flex flex-col items-center p-10 h-[32rem] w-[30rem] rounded-lg gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl font-bold text-black">Welcome Back!</div>
          <div className="font-medium text-gray-700 tracking-wide">
            Login with your credentials
          </div>
        </div>
        <form
          onSubmit={handleChange}
          className=" w-full h-[20rem] flex flex-col justify- items-center gap-4"
        >
          <div className="flex flex-col justify-center items-start w-full">
            <label
              htmlFor="email"
              className="text-md text-gray-700 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-tertiary-a border border-gray-500 rounded-sm w-full h-12 p-2 focus:outline-none focus:border-primary-c transition duration-200 ease-in-out"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <label
              htmlFor="password"
              className="text-md text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-tertiary-a border border-gray-500 rounded-sm w-full h-12 p-2 focus:outline-none focus:border-primary-c transition duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="hover:bg-secondary-b bg-secondary-a mt-4 text-tertiary-a w-full p-5 font-bold rounded-lg duration-200"
          >
            LOGIN
          </button>
          <div className="flex gap-1 font-medium">
            <div>Don't have an account..?</div>
            <NavLink to={"/signup"} className="text-primary-b hover:underline">
              SignUp
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
