import { ToggleMode } from "@/components/feature";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-auto border-b-2">
      <div className=" justify-between flex-row-reverse px-6 py-2 flex items-center  max-w-screen-2xl  m-auto">
        <ToggleMode />
      </div>
    </div>
  );
};

export default Header;
