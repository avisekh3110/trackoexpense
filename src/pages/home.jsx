import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import dashImg from "/dashImg.svg";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-primary-b via-primary-b to-primary-a h-1/3 lg:h-1/2 w-full flex pt-24 ">
        <div className=" h-full w-3/5 flex justify-center items-start flex-col p-10 lg:pl-36">
          <div className="font-black text-2xl lg:text-4xl text-tertiary-a w-full">
            TRACK YOUR EXPENSES
          </div>
          <div className="text-secondary-b font-bold text-sm md:text-base lg:text-2xl ">
            "Track, Save, Thrive: Your Personal Expense Companion."
          </div>
        </div>
        <div className=" h-full w-2/5 flex justify-start items-center select-none">
          <img src={dashImg} className="h-56 lg:h-96" alt="" />
        </div>
      </div>
      <div className="bg-slate-950 w-full h-[100rem]"></div>
    </div>
  );
}
