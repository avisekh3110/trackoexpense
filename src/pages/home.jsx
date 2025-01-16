import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import dashImg from "/dashImg.svg";
import MainFrame from "../components/mainFrame";
import Footer from "../components/footer";
import GraphBox from "../components/graphBox";

export default function Home() {
  return (
    <div className="w-full h-screen duration-300">
      <Navbar />
      <div className="bg-gradient-to-b from-primary-b via-primary-b to-primary-a h-1/3 lg:h-1/2 w-full flex pt-24 duration-300">
        <div className=" h-full w-3/5 flex justify-center items-start flex-col p-10 lg:pl-36">
          <div className="font-black text-2xl lg:text-4xl text-tertiary-a w-full">
            TRACK YOUR EXPENSES
          </div>
          <div className="text-secondary-b font-bold text-sm md:text-base lg:text-2xl ">
            "Track, Save, Thrive: Your Personal Expense Companion."
          </div>
          <a
            href={"#id"}
            className="lg:mt-6 mt-2 px-4 py-2 bg-secondary-a text-white font-bold rounded-lg hover:bg-secondary-b transition duration-300"
          >
            Get Started
          </a>
        </div>
        <div className=" h-full w-2/5 flex justify-start items-center select-none">
          <img src={dashImg} className="h-56 lg:h-96" alt="" />
        </div>
      </div>
      <MainFrame />
      <GraphBox />
      <Footer />
    </div>
  );
}
