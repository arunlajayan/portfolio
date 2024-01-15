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
          <div className="mx-3 my-2">
            <div className="flex flex-row justify-evenly">
              <h4 className="text-blue-600 text-3xl font-serif">ARUN A.L</h4>
              <a
                href="https://www.linkedin.com/in/arunlajayan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/svg/linkedin.svg" alt="LinkedIn" width={24} />
              </a>
              <a
                href="https://github.com/arunlajayan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/svg/github.svg" width={24} />
              </a>
              <a
                href="https://gitlab.com/ARUNAL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/svg/gitlab.svg" width={24} />
              </a>
              <a
                href="https://stackoverflow.com/users/14404514/arun-al"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/svg/stackoverflow.svg" width={24} />
              </a>
              <a
                href="https://leetcode.com/arunlajayan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/svg/leetcode.svg" width={24} />
              </a>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="border bg-slate-900 px-2 rounded-lg">
                  <p className="text-l py-6 text-white">Full stack Developer</p>
                </div>
                <div className="border bg-slate-900 px-2 rounded-lg">
                  <p className="text-xl py-6 text-white">Smart Contact</p>
                </div>
                <div className="border bg-slate-900 px-2 rounded-lg">
                  <p className="text-xl py-6 text-white">Web3</p>
                </div>
              </div>
              <div className="border bg-cyan-900 px-2 rounded-lg">
                <p className="text-xl py-6 text-slate-950">
                  Based in Kerala, IN
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-lg px-6 border-4">
          <h3 className="font-bold text-3xl font-mono">SUMMARY</h3>
          <p className="font-mono text-base hover:text-2xl">
            Architected and developed robust full-stack web applications,
            seamlessly integrating front-end and back-end technologies.
            Proficient in diverse tech stacks, ensuring scalable and efficient
            solutions. Collaborated with cross-functional teams, employing agile
            methodologies for rapid development cycles. Implemented responsive
            designs, delivering optimal user experiences across devices.
            Committed to staying current with industry trends and adopting best
            practices for continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
