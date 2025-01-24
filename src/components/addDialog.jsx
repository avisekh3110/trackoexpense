import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function AddDialog(prop) {
  const createdNoti = () => toast.success("Datasheet create successfully!");

  return (
    <div className="fixed z-40 w-screen h-screen top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="text-2xl font-bold text-center mb-4">Add Datasheet</div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">
            Enter name of Datasheet
          </label>
          <input
            id="title"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={prop.title}
            autoFocus
            onChange={(e) => prop.setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="budget" className="block text-gray-700 mb-2">
            Enter the Budget
          </label>
          <input
            id="budget"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            value={prop.budget}
            onChange={(e) => prop.setBudget(e.target.value)}
          />
        </div>

        <div className="gap-4 flex text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => {
              prop.handleClick();
              prop.setIsDialog(!prop.isDialog);
              createdNoti();
            }}
          >
            Add Datasheet
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => {
              prop.setIsDialog(!prop.isDialog);
              prop.setTitle("");
              prop.setBudget(0);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
