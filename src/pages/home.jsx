import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import dashImg from "/dashImg.svg";
import MainFrame from "../components/mainFrame";
import Footer from "../components/footer";
import SideFrame from "../components/sideFrame";

export default function Home() {
  // const [line, setLine] = useState("T");

  // const [idx, setidx] = useState(second);

  // const settingLine = useCallback(() => {
  //   const someLine = "Track, Save, Thrive: Your Personal Expense Companion.";
  //   let i = 1;
  //   setInterval(() => {
  //     console.log(line);
  //     console.log(someLine.length);
  //     if (line.length < someLine.length) {
  //       setLine((pL) => pL + someLine[i]);
  //       i++;
  //     } else {
  //       setLine("");
  //     }
  //   }, 100);
  // }, [line]);

  // useEffect(() => {
  //   settingLine();
  // }, []);

  // console.log(settingLine());

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
          <div className="flex md:text-base text-primary-c font-semibold">
            Easily take control of your finances with our intuitive expense
            tracking tool.
          </div>
        </div>
        <div className=" h-full w-2/5 flex justify-start items-center select-none">
          <img src={dashImg} className="h-56 lg:h-96" alt="" />
        </div>
      </div>
      <hr className="border-primary-c" />
      <SideFrame />
      {/* <MainFrame /> */}
      <Footer />
    </div>
  );
}
