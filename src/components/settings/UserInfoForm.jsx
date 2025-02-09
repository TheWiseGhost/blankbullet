import React from "react";

const UserInfoForm = ({ email, name }) => {
  return (
    <div className="font-dm space-y-4 max-w-md bg-white">
      {/* Email Field */}
      <div className="">
        <div className="text-lg font-medium text-gray-800 mb-2">Email</div>
        <div className="border border-gray-300 rounded-lg p-3 text-gray-700">
          {email}
        </div>
      </div>

      {/* Name Field */}
      <div className="">
        <div className="text-lg font-medium text-gray-800 mb-2">Name</div>
        <div className="border border-gray-300 rounded-lg p-3 text-gray-700">
          {name}
        </div>
      </div>

      {/* Plan Field */}
      <div className="pb-4">
        <div className="text-lg font-medium text-gray-800 mb-2">Drops</div>
        <div className="border border-gray-300 rounded-lg p-3 text-gray-700">
          <div className="flex flex-row items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-neutral-700"></div>
            <span>Low Drops Remaining</span>
          </div>
        </div>
      </div>

      {/* Upgrade Button */}
      <button
        onClick={() => {
          window.open("/checkout");
        }}
        className="w-1/2 bg-black border-black border-2 text-white hover:bg-white hover:text-black py-3 rounded-2xl transition duration-300 font-semibold"
      >
        Buy More
      </button>
    </div>
  );
};

export default UserInfoForm;
