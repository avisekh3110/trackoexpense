import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function Home() {
  const [checkActive, setCheckActive] = useState(true);
  return (
    <div className="w-full bg-slate-300 h-screen">
      <Navbar checkActive={checkActive} setCheckActive={setCheckActive} />
      <div
        className={`absolute bg-white ${
          checkActive ? "-translate-x-[30rem]" : "-translate-x-[0rem]"
        } transform  h-1/3 w-full duration-300 ease-out opacity-30`}
      >
        <div className="h-full w-full blur-lg"></div>
      </div>
      <div className="bg-gradient-to-b from-primary-b via-primary-b to-primary-a h-1/3 w-full"></div>
    </div>
  );
}
