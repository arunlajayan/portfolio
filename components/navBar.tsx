import Link from 'next/link'
import React from 'react'

export default function NavBar({ font }: { font?: string }) {
  return (
    <div className="">
    <header className="navbar px-8 py-5 flex max-h-auto bg-gray-900 ">
          <div className="flex-1">
            <Link href="/">
              <div className="flex">
                <h1 className={`uppercase text-green-500 text-center `}>
                  Profile
                </h1>
              </div>
            </Link>
          </div>
          <div className={`flex space-x-4 font-bold  ${font}`}>
            <Link
              href="/product/upload"
              className=" text-white text-green-951 text-l  hover:text-yellow-700">
              <div className={` `}>
                Contact
              </div>
            </Link>
            <Link
              href="/product/upload"
              className=" text-white text-green-951 text-l hover:text-yellow-700">
              <div className={``}>
                About
              </div>
            </Link>
            <Link
              href="/product/upload"
              className=" text-white max-w-[100rem] text-green-951 text-l  hover:text-yellow-700">
              <div className={``}>
                Project
              </div>
            </Link>


          </div>
      </header>
      </div>
  )
}
