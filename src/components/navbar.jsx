import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger from "/burger.svg";

export default function Navbar() {
  const [checkActive, setCheckActive] = useState(true);
  return (
    <div className="w-screen fixed top-0 left-0">
      <div className="bg-primary-b w-full flex justify-between items-center lg:px-20 p-6 h-24">
        <div className="text-tertiary-a text-xl tracking-wide font-bold">
          TRACKOEXPENSE
        </div>
        <div className="bg-primary-a lg:w-1/6 sm:w-1/3 w-14  rounded-full sm:rounded-lg  flex gap-10 justify-around sm:px-8 items-center text-tertiary-a font-semibold h-10">
          <Link className="hidden sm:flex" to={"/"}>
            HOME
          </Link>
          <Link className="hidden sm:flex" to={"/support"}>
            SUPPORT
          </Link>
          <div
            className="sm:hidden flex justify-center"
            onClick={() => {
              setCheckActive(!checkActive);
            }}
          >
            <img height={20} width={20} src={burger} alt="Ham" />
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-tertiary-b ${
          checkActive ? "translate-x-[100%]" : ""
        } transform p-3 w-full duration-300 ease-out shadow-slate-900 shadow-lg`}
      >
        <div className="h-full w-full flex flex-col justify-center items-center gap-4 font-bold tracking-widest text-primary-b">
          <Link to={"/"}>HOME</Link>
          <hr className="w-full bg-black" />
          <Link to={"/support"}>SUPPORT</Link>
        </div>
      </div>
    </div>
  );
}
