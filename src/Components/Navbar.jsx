import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import github from '../assets/Github.png'
const Navbar = () => {
  return (
    <div className="bg-white  border-b-2 border-gray-300">
      <div className="navbar max-w-[1440px] mx-auto px-4">
        <div className=" navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-1">
            <Link className="/">
              <img className="w-8 h-8 sm:w-10 sm:h-10" src={logo} alt="" />
            </Link>
            <Link
              to="/"
              className="flex items-center text-xl font-semibold ml-2 btn-ghost bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
            >
              AppHub
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className=" menu-horizontal px-1 font-semibold gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a
            href="https://github.com/Jobayer561"
            target="_blank"
            className="btn bg-gradient-to-r from-purple-700 to-purple-400 text-white"
          >
            <div>
              <img src={github} alt="" />
            </div>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar