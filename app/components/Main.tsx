import React from "react";

const main = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-gray-200 p-2 my-2">
        <img
          src="assets/icon/angular.png"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
        <img
          src="assets/icon/react.png"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
        <img
          src="assets/icon/nextjs.png"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
        <img
          src="assets/icon/Vue.png"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
      </div>
      <div className="flex justify-around bg-gray-200 p-2 my-2">
        <img
          src="assets/icon/expressjs.png"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
        <img
          src="assets/icon/nestjs.png"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
      </div>
      <div className="flex justify-around bg-gray-200 p-2 my-2">
        <img
          src="assets/icon/truffle.png"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
        <img
          src="assets/icon/hardhat.jpg"
          className="flex-shrink-0 w-auto h-16 object-cover"
        />
      </div>
    </div>
  );
};

export default main;
