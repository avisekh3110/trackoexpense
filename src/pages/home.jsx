import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import dashImg from "/dashImg.svg";

export default function Home() {
  return (
    <div className="w-full bg-slate-300 h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-primary-b via-primary-b to-primary-a h-1/3 w-full flex pt-24">
        <div className=" h-full w-3/5 flex justify-center items-start flex-col p-10">
          <div className="font-black text-2xl text-tertiary-a w-full">
            TRACK YOUR EXPENSES
          </div>
          <div className="text-white font-bold  text-sm md:text-base ">
            "Track, Save, Thrive: Your Personal Expense Companion."
          </div>
        </div>
        <div className=" h-full w-2/5 flex justify-start items-center">
          <img src={dashImg} height={200} width={200} alt="" />
        </div>
      </div>
    </div>
  );
}
