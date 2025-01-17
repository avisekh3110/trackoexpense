import React from "react";

export default function DataTitleBox(prop) {
  return (
    <div className="bg-primary-c flex w-full h-10 items-center justify-center p-2 rounded-md capitalize font-bold text-tertiary-a tracking-wider shadow-lg shadow-neutral-500">
      {prop.title}
    </div>
  );
}
