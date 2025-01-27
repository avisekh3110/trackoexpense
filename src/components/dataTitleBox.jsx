import React, { useState } from "react";
import DeleteIcon from "/deleteIcon.svg";
import { toast } from "react-toastify";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function DataTitleBox(prop) {
  const deleteNoti = () => toast.success("Datasheet Deleted successfully!");
  const [moreBox, setMoreBox] = useState(false);
  console.log(moreBox);
  return (
    <div
      className={`${
        prop.activeDataSheet &&
        //checks wheather the activeDataSheet is defined or not. and at the begining nothing is selected or it remained undefined.
        prop.activeDataSheet.id === prop.dataSheet.id
          ? "bg-primary-a"
          : "bg-primary-c"
      }  flex w-full h-10 items-center justify-between rounded-md capitalize text-tertiary-a tracking-wider shadow-lg shadow-neutral-500 duration-300`}
    >
      <button
        onClick={() => {
          prop.setActiveDataSheet(prop.dataSheet);
          console.log(prop.dataSheet);
        }}
        className="h-full w-full overflow-hidden p-2"
        title={prop.dataSheet.title}
      >
        {prop.dataSheet.title}
      </button>
      <div
        onClick={() => {
          setMoreBox(!moreBox);
        }}
        onBlur={() => {
          setMoreBox(!moreBox);
        }}
        className="h-full w-10 p-2 flex items-center justify-center"
      >
        <MoreVertIcon className="cursor-pointer" />
        {moreBox && (
          <div className="absolute transform translate-x-[7.5rem] p-2 bg-slate-200 rounded-md flex flex-col items-start gap-2 ">
            <button
              onClick={() => {
                prop.deleteDataElement(prop.dataSheet.id);
                prop.activeDataSheet &&
                  prop.activeDataSheet.id === prop.dataSheet.id &&
                  prop.setActiveDataSheet({});
                console.log("deleted");
                deleteNoti();
              }}
              className="bg-red-400 w-full rounded-md "
            >
              Delete
            </button>
            <button className="bg-green-400 w-full rounded-md px-4">
              Change Budget
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
