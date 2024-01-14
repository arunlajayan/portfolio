import React from "react";
import Profile from "../../assets/profile.jpg";
import Main from "./Main";
const Intro = () => {
  return (
    <div className="m-12">
      <div className="flex flex-wrap">
        <div className=" w-[200px] h-[200px]">
          <img
            className="border-r-4 border-indigo-200"
            src="assets/profile1.jpg"
            alt="Description of the image"
          />
        </div>
        <div>
          {/* <div className="">
            <img
             src="assets/cover-img.avif"/>
          </div> */}
          <div className="mx-3 my-20">
            <h4 className="text-blue-900 text-2xl font-semibold">ARUN A.L</h4>
            <div className="flex flex-row">
            <div className="border bg-slate-900 px-2 rounded-lg">
              <p className="text-xl py-6 text-white">Full stack Developer</p>
            </div>
            <div className="border bg-slate-900 px-2 rounded-lg">
              <p className="text-xl py-6 text-white">Smart Contact</p>
            </div>
            <div className="border bg-slate-900 px-2 rounded-lg">
              <p className="text-xl py-6 text-white">Web3</p>
              </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Intro;
