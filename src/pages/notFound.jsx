import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import notFoundImg from "/notFoundImg.svg";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full duration-300 h-screen flex flex-col justify-between">
      <Navbar />
      <div className="bg-primary-b h-full w-full flex items-center justify-center">
        <div className=" flex md:flex-row flex-col-reverse items-center justify-around md:justify-between w-[65rem] h-[35rem] md:px-24">
          <div className=" flex flex-col gap-10">
            <div>
              <div className="text-secondary-a font-black text-6xl">
                OOPS...
              </div>
              <div className="text-primary-c text-2xl lg:text-4xl font-extrabold">
                NOTHING'S HERE
              </div>
              <div className="text-white font-bold">
                Sorry, the page you're looking for
                <br /> doesn't exist. If you think <br />
                something is broken report a problem.
              </div>
            </div>
            <div className=" flex items-center justify-center md:justify-start ">
              <NavLink
                to={"/"}
                className="bg-green-400 h-10 w-56 rounded-md text-tertiary-a font-bold hover:bg-green-600 duration-300 flex items-center justify-center"
              >
                BACK TO HOME
              </NavLink>
            </div>
          </div>
          <div className=" h-80 md:h-[30rem] w-80 md:w-[30rem] lg:96 flex justify-center items-center">
            <img src={notFoundImg} alt="NOT FOUND IMAGE" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
