import React from "react";

export default function DataRow(prop) {
  return (
    <div className="flex items-center justify-between border-b-2 border-dashed border-slate-400">
      <div className="bg-blue-100 flex h-full items-center justify-center w-10 py-1 border-r-2 border-dashed border-slate-400">
        {prop.sno}
      </div>
      <div className=" w-full h-full flex justify-center items-center ">
        {prop.activeDataSheet.data.feild[prop.sno - 1]}
      </div>
      <div className="bg-amber-100 flex h-full items-center justify-center w-20 border-l-2 border-dashed border-slate-400">
        {prop.activeDataSheet.data.total[prop.sno - 1]}
      </div>
    </div>
  );
}
