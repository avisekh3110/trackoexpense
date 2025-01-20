import React, { useEffect, useState } from "react";
import GraphBox from "./graphBox";
import DataTitleBox from "./dataTitleBox";

export default function MainFrame() {
  const [dataList, setDataList] = useState([]);
  console.log(dataList);
  const [activeDataSheet, setActiveDataSheet] = useState([]);

  const handleClick = () => {
    const EnterTitle = prompt("Enter the title: ", "DemoTitle");
    const Budget = prompt("Enter a Budget: ");
    if (EnterTitle !== null) {
      const newData = {
        id: dataList.length === 0 ? 1 : dataList[dataList.length - 1].id + 1,
        title: EnterTitle,
        budget: Budget,
      };
      setDataList([...dataList, newData]);
      console.log("Added");
    }
  };

  const deleteDataElement = (index) => {
    let filteredDataList = [];
    filteredDataList = dataList.filter((element) => {
      return element.id != index;
    });
    setDataList(filteredDataList);
  };

  return (
    <div>
      <div
        className="bg-primary-a
       w-full h-[50rem] flex "
      >
        <div className="h-full lg:w-1/6 w-1/4 sm:flex hidden  flex-col pl-4 py-4 gap-2">
          <div className="flex justify-between items-center w-full h-16">
            <div className="text-white font-bold tracking-wide">DATASHEETS</div>
            <button
              onClick={handleClick}
              className="bg-green-500 flex justify-center items-center w-16 h-8 rounded-md text-white text-sm font-bold hover:bg-green-700 duration-200 ease-out
            "
            >
              ADD
            </button>
          </div>
          <div className="w-full h-full bg-white rounded-md py-4 px-2 flex flex-col gap-3 duration-300 overflow-scroll">
            {dataList.map((element) => {
              return (
                <DataTitleBox
                  key={element.id}
                  dataSheet={element}
                  deleteDataElement={deleteDataElement}
                  setActiveDataSheet={setActiveDataSheet}
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-full lg:w-5/6 sm:w-3/4 p-4">
          <div className="h-full w-full bg-white rounded-md p-2">
            {activeDataSheet.length !== 0 ? (
              <div className="bg-slate-600 h-12 w-full rounded-md flex text-white font-semibold">
                <div className=" h-full w-1/2 flex justify-start items-center px-4 text-xl tracking-wider">
                  {activeDataSheet[0].title}
                </div>
                <div className=" h-full w-1/2 flex justify-end items-center px-4 gap-2">
                  <div>Budget : </div>
                  <div className="w-24">{activeDataSheet[0].budget}</div>
                </div>
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xl text-slate-400 font-bold">
                SELECT A DATASHEET
              </div>
            )}
          </div>
        </div>
      </div>
      <GraphBox />
    </div>
  );
}
