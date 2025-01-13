import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-slate-300 h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-primary-b via-primary-b to-primary-a h-1/3 w-full flex">
        <div className="bg-white h-full w-1/2">
          <div className="bg-blue-200 w-full h-1/2 flex justify-center items-center">
            <div className="font-black text-2xl">TRACK YOUR EXPENSES</div>
            <div></div>
          </div>
          <div className="bg-yellow-200 w-full h-1/2"></div>
        </div>
        <div className="bg-slate-200 h-full w-1/2"></div>
      </div>
    </div>
  );
}
