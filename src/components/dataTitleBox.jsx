import React from "react";
import DeleteIcon from "/deleteIcon.svg";

export default function DataTitleBox(prop) {
  return (
    <div
      className={`${
        prop.activeDataSheet[0] &&
        //checks wheather the activeDataSheet is defined or not. and at the begining nothing is selected or it remained undefined.
        prop.activeDataSheet[0].id === prop.dataSheet.id
          ? "bg-primary-a"
          : "bg-primary-c"
      }  flex w-full h-10 items-center justify-between rounded-md capitalize text-tertiary-a tracking-wider shadow-lg shadow-neutral-500 duration-300`}
    >
      <button
        onClick={() => {
          prop.setActiveDataSheet([prop.dataSheet]);
          console.log(prop.dataSheet);
        }}
        className="h-full w-full overflow-hidden px-2"
        title={prop.dataSheet.title}
      >
        {prop.dataSheet.title}
      </button>

      <div className="h-full w-10 p-2 flex items-center justify-center">
        <button
          onClick={() => {
            prop.deleteDataElement(prop.dataSheet.id);
            prop.activeDataSheet[0].id === prop.dataSheet.id &&
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
