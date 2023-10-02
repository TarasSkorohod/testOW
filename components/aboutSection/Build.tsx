import React from "react";

export function Build() {
  return (
    <div className=" flex  items-center justify-center min-h-[30vh] ">
      <div className="w-full max-w-screen-lg mx-auto flex items-center border border-black p-3">
        <span className="w-full text-3xl font-bold">
          BUILD YOUR OWN PACKAGE
        </span>
        <button className="font-bold w-full justify-center  py-3 text-sm  border bg-black text-white border-black hover:bg-white hover:text-black ">
          SELECT YOUR VEHICLE
        </button>
      </div>
    </div>
  );
}
