import React, { useEffect, useState } from "react";
import GraphBox from "./graphBox";
import DataTitleBox from "./dataTitleBox";
import AddDialog from "../components/addDialog";

export default function MainFrame() {
  const [dataList, setDataList] = useState([]);
  console.log(dataList);
  const [activeDataSheet, setActiveDataSheet] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log(title);
  }, [title]);
  const [budget, setBudget] = useState(0);
  useEffect(() => {
    console.log(budget);
  }, [budget]);

  const handleClick = () => {
    if (title !== null && budget !== "" && budget !== null) {
      const newData = {
        id: dataList.length === 0 ? 1 : dataList[dataList.length - 1].id + 1,
        title: title,
        budget: budget,
      };
      setDataList([...dataList, newData]);
      setTitle("");
      setBudget(0);
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
      {isDialogOpen && (
        <AddDialog
          title={title}
          setTitle={setTitle}
          budget={budget}
          setBudget={setBudget}
          handleClick={handleClick}
          isDialog={isDialogOpen}
          setIsDialog={setIsDialogOpen}
        />
      )}
      <div
        className="bg-primary-a
       w-full h-[50rem] flex"
      >
        <div className="h-full lg:w-1/6 w-1/4 sm:flex hidden  flex-col pl-4 py-4 gap-2">
          <div className="flex justify-between items-center w-full h-16">
            <div className="text-white font-bold tracking-wide">DATASHEETS</div>
            <button
              onClick={() => {
                setIsDialogOpen(!isDialogOpen);
              }}
              className="bg-green-500 flex justify-center items-center w-16 h-8 rounded-md text-white text-sm font-bold hover:bg-green-700 duration-200 ease-out focus:ring-2 focus:ring-green-700
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
                  activeDataSheet={activeDataSheet}
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-full lg:w-5/6 sm:w-3/4 p-4">
          <div className="h-full w-full bg-white rounded-md p-2">
            {activeDataSheet.length !== 0 ? (
              <div className="bg-tertiary-b shadow-md shadow-slate-400 h-12 w-full rounded-md flex text-slate-500 font-bold">
                <div className=" h-full w-1/2 flex justify-start items-center px-4 text-lg tracking-wider">
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
