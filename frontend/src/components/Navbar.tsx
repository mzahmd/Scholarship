import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isHidden, setHidden] = useState(true)

  function handleClick() {
    setHidden(prevHidden => !prevHidden)
  }

  return (
    <nav className="border-gray-400 bg-gray-300 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap justify-between p-4">
        <button onClick={handleClick} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="md:hidden">
          <Link to={"/"}>
            <Button className="h-max me-2">Abmelden</Button>
          </ Link>
          <ModeToggle />
        </div>
        <div className={`${isHidden ? "hidden" : "block"} w-full md:block md:w-auto`} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link to="/user" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Information</Link>
            </li>
            <li>
              <Link to="/user/applications" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Bewerbungen</Link>
            </li>
            <li>
              <Link to="/admin" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Administraion</Link>
            </li>
            <li>
              <Link to="/user/2" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profil</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Link to={"/"}>
            <Button className="h-max me-2">Abmelden</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}