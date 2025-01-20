import React from "react";
import DeleteIcon from "/deleteIcon.svg";

export default function DataTitleBox(prop) {
  return (
    <div className="bg-primary-b flex w-full h-10 items-center justify-between rounded-md capitalize font-bold text-tertiary-a tracking-wider shadow-lg shadow-neutral-500 duration-300">
      <button
        onClick={() => {
          prop.setActiveDataSheet([prop.dataSheet]);
          console.log(prop.dataSheet);
        }}
        className="w-full h-full"
      >
        {prop.dataSheet.title}
      </button>

      <div className="h-full w-10 p-2 flex items-center justify-center">
        <button
          onClick={() => {
            prop.deleteDataElement(prop.dataSheet.id);
            prop.setActiveDataSheet([]);
          }}
          className="bg-red-600 rounded-full text-xs h-full w-6 flex items-center justify-center hover:bg-red-800 duration-200"
        >
          ⛌
        </button>
      </div>
    </div>
  );
}
