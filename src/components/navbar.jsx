import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import burger from "/burger.svg";

export default function Navbar() {
  const [checkActive, setCheckActive] = useState(true);
  return (
    <div className="w-screen fixed top-0 left-0">
      <div className="backdrop-blur-sm bg-primary-b bg-opacity-70 w-full flex justify-between items-center lg:px-20 p-6 h-24">
        <NavLink
          to={"/"}
          className="text-tertiary-a text-xl tracking-wide font-bold flex justify-center items-center select-none"
        >
          <div>TRACK</div>
          <div className="text-secondary-a text-3xl">O</div>
          <div>EXPENSE</div>
        </NavLink>
        <div className="bg-primary-a sm:w-fit w-11 rounded-full sm:rounded-lg  flex gap-6 justify-around sm:px-8 items-center text-tertiary-a font-semibold h-10">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return `hidden sm:flex h-full p-4 w-1/2 justify-center items-center ${
                isActive
                  ? "text-secondary-a"
                  : "text-tertiary-a hover:text-secondary-b"
              }`;
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to={"/support"}
            className={({ isActive }) => {
              return `hidden sm:flex h-full p-4 w-1/2 justify-center items-center  ${
                isActive
                  ? "text-secondary-a"
                  : "text-tertiary-a hover:text-secondary-b"
              }`;
            }}
          >
            SUPPORT
          </NavLink>
          <div
            className="sm:hidden flex justify-center"
            onClick={() => {
              //! JUST IN CASE
              // setCheckActive(!checkActive); expected that these both run together and will make true->false->ture
              // setCheckActive(!checkActive); But that never happen

              // setCheckActive((prevCheckActive) => !prevCheckActive); for solving this...we need to do this..
              // setCheckActive((prevCheckActive) => !prevCheckActive); this will run it seperately and will make true->false->ture.

              setCheckActive((prevCheckActive) => !prevCheckActive);
            }}
          >
            <img height={20} width={20} src={burger} alt="Ham" />
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden absolute bg-tertiary-b ${
          checkActive ? "translate-x-[100%]" : ""
        } transform p-3 w-full duration-300 ease-out shadow-slate-900 shadow-lg`}
      >
        <div className="h-full w-full flex flex-col justify-center items-center gap-4 font-bold tracking-widest text-primary-b">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return `sm:hidden flex  ${
                isActive
                  ? "text-secondary-a"
                  : "text-primary-a hover:text-secondary-b"
              }`;
            }}
          >
            HOME
          </NavLink>
          <hr className="w-full bg-black" />
          <NavLink
            to={"/support"}
            className={({ isActive }) => {
              return `sm:hidden flex  ${
                isActive
                  ? "text-secondary-a"
                  : "text-primary-a hover:text-secondary-b"
              }`;
            }}
          >
            SUPPORT
          </NavLink>
        </div>
      </div>
    </div>
  );
}
