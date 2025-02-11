import React from 'react'
import {Link, NavLink} from 'react-router'

export default function Header() {
  return (
  <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
    className="mr-3 h-12"
    alt="Logo"
    />
                    </Link>
                    <div className="flex items-center border-2">
                        <Link
    to="#"
    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 px-5 py-2 py-2.5 mr-2 focus:outline-none"
    >
                            Log in
                        </Link>
                        <Link
    to="#"
    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 px-5 py-2 py-2.5 mr-2 focus:outline-none"
    >
                            Get started
                        </Link>
  </div>
                    <div
    className="hidden justify-between items-center w-full flex w-auto border-1"
    id="mobile-menu-2"
    >
                        <ul className="flex flex-col mt-4 font-medium flex-row space-x-8 mt-0">
                            <li>
                            <NavLink className='bg-black'>Hello</NavLink>
                            <NavLink
      to="/"
      className={({isActive}) =>
      `bg-black block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-orange-700 p-0`
      }
      >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
      to="/about"
      className={({isActive}) =>
      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-orange-700 p-0`
      }
      >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
      to="/contact"
      className={({isActive}) =>
      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-orange-700 p-0`
      }
      >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
      to="/github"
      className={({isActive}) =>
      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-orange-700 p-0`
      }
      >
                                    Github
                                </NavLink>
                            </li>
    </ul>
  </div>
  </div>
  </nav>
</header>
);
}