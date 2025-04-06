import React, { useEffect, useState } from "react";
import GraphBox from "./graphBox";
import DataTitleBox from "./dataTitleBox";
import AddDialog from "../components/addDialog";
import husky from "/husky.svg";
import DataRow from "./dataRow";
import { dummyMonth } from "./dummydata";

export default function SideFrame() {
  const [dataList, setDataList] = useState([]);
  // console.log(dataList);
  const [activeDataSheet, setActiveDataSheet] = useState({});
  // console.log(activeDataSheet.data.sno);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  // useEffect(() => {
  //   console.log(title);
  // }, [title]);
  const [budget, setBudget] = useState(0);
  // useEffect(() => {
  //   console.log(budget);
  // }, [budget]);

  const handleClick = () => {
    if (title !== null && budget !== "" && budget !== null) {
      // const newData = {
      //   id: dataList.length === 0 ? 1 : dataList[dataList.length - 1].id + 1,
      //   title: title,
      //   budget: budget,
      //   data: {
      //     sno: [
      //       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      //       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      //     ],
      //     feild: [
      //       100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
      //       113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
      //       126, 127, 128, 129, 130,
      //     ],
      //     total: [
      //       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      //       0, 0, 0, 0, 0, 0, 0, 0,
      //     ],
      //   },
      // };
      // {
      //   "name": "January",
      //   "Mainbudget": 7000,
      //   "field": {
      //     "x1": {
      //       "budget": 2000,
      //       "entry": [
      //         1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32, 5,
      //         3, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32,
      //         5, 3
      //       ]
      //     },
      //     "x2": {
      //       "budget": 2000,
      //       "entry": [
      //         1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32, 5,
      //         3, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32,
      //         5, 3
      //       ]
      //     },
      //     "x3": {
      //       "budget": 2000,
      //       "entry": [
      //         1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32, 5,
      //         3, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32,
      //         5, 3
      //       ]
      //     },
      //     "x4": {
      //       "budget": 2000,
      //       "entry": [
      //         1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32, 5,
      //         3, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32,
      //         5, 3
      //       ]
      //     },
      //     "x5": {
      //       "budget": 2000,
      //       "entry": [
      //         1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32, 5,
      //         3, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 4, 4, 32,
      //         5, 3
      //       ]
      //     }
      //   }
      // }

      setDataList([...dataList, dummyMonth]);
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
            {activeDataSheet.title != undefined ? (
              <div className="flex flex-col gap-3">
                <div className="bg-tertiary-b shadow-md shadow-slate-400 h-12 w-full rounded-md flex text-slate-500 font-bold">
                  <div className=" h-full w-1/2 flex justify-start items-center px-4 text-lg tracking-wider">
                    {activeDataSheet.title}
                  </div>
                  <div className=" h-full w-1/2 flex justify-end items-center px-4 gap-2">
                    <div>Budget : </div>
                    <div className="w-24 overflow-x-scroll">
                      {activeDataSheet.budget}
                    </div>
                  </div>
                </div>
                <div className="w-full h-[42rem] flex flex-col gap-2">
                  <div className="flex items-center justify-between rounded-md">
                    <div className="bg-blue-400 flex h-full items-center justify-center w-10 py-1  rounded-l-md">
                      No.
                    </div>
                    <div className=" w-full h-full flex justify-center items-center bg-slate-400 ">
                      Information
                    </div>
                    <div className="bg-amber-400 flex h-full items-center justify-center w-20 rounded-e-md">
                      Total
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b-2 border-dashed border-slate-400">
                    <div className="bg-blue-100 flex h-full items-center justify-center w-10 border-r-2 border-dashed border-slate-400"></div>
                    <div className="w-full h-full flex justify-around items-center">
                      {Array.from(activeDataSheet.fields).map((fieldName) => {
                        return <div>{fieldName}</div>;
                      })}
                    </div>
                    <div className="bg-amber-100 flex h-full items-center justify-center w-20 border-l-2 border-dashed border-slate-400">
                      {activeDataSheet.total()}
                    </div>
                  </div>
                  <div className="overflow-y-scroll rounded-md ring-1 ring-slate-400">
                    {activeDataSheet.title != undefined &&
                      activeDataSheet.days.map((day, idx) => {
                        return (
                          <div className="flex items-center justify-between border-b-2 border-dashed border-slate-400">
                            <div className="bg-blue-100 flex h-full items-center justify-center w-10 border-r-2 border-dashed border-slate-400">
                              {idx + 1}
                            </div>
                            <div className="w-full h-full flex justify-around items-center">
                              {Array.from(day.entries).map(
                                ([fieldName, value]) => {
                                  return <div>{value}</div>;
                                }
                              )}
                            </div>
                            <div className="bg-amber-100 flex h-full items-center justify-center w-20 border-l-2 border-dashed border-slate-400">
                              {day.total()}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xl text-slate-400 font-bold flex-col">
                <img src={husky} alt="turtleSVG" height={100} width={100} />
                <div>SELECT A DATASHEET</div>
                <div className="font-bold text-xs">OR TRY CREATING A NEW</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <GraphBox />
    </div>
  );
}
