import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="m-2">
        <header className="navbar px-8 py-5 flex h-16 bg-gray-900 rounded-2xl">
          <div className="flex-1">
            <Link href="/">
              <div className="flex">
                <h1 className={`uppercase text-green-500 text-center `}>
                  bid cart
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex space-x-4 font-bold ">
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
              className=" text-white  text-green-951 text-l  hover:text-yellow-700">
              <div className={``}>
                Project
              </div>
            </Link>


          </div>
        </header>
      </div>

      <div className="m">
        <h1>Main</h1>
      </div>

      <footer className="bg-white absolute w-full bottom-0  shadow  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
