import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="bg-black text-sm text-white px-4 py-2 flex justify-between items-center">
        <div>
          <p className="font-medium">
            🔥 20% OFF Today Only! Use code SPRING20
          </p>
        </div>
        <div className="flex gap-4">
          <span className="font-medium">📞 +1-800-123-4567</span>
          <span className="font-medium flex gap-2">
            <p>👤</p>
            <p className="cursor-pointer">Login</p>
            <p>|</p>
            <p className="cursor-pointer">Sign Up</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
