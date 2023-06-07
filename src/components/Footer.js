import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
export const Footer = () => {
  return (
      
      <footer className="bg-white shadow dark:bg-gray-900 ">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link to="/" className="flex items-center mb-4 sm:mb-0">
                      <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AskMovie</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <a href="/" target="_blank" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                      </li>
                      <li>
                          <a href="/"  target="_blank" className="mr-4 hover:underline md:mr-6">Facebook</a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="mr-4 hover:underline md:mr-6 ">Twitter</a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="hover:underline">GitHub</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">AskMovie™</a>. All Rights Reserved.</span>
          </div>
      </footer>
  )
}

