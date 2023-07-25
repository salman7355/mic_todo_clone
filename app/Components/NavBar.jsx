"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { BsFillPersonFill, BsStar } from "react-icons/bs";

const NavBar = () => {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute  top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-white z-50 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-2/3 h-screen bg-slate-600 z-20 rounded-e-xl fixed top-0 -left-[30rem] lg:left-0 lg:w-[21%] overflow-hidden peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <div className="data  flex gap-2 md:gap-0 md:justify-between items-center ">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center ">
                <BsFillPersonFill size={50} color="black" />
              </div>
              <div className="flex flex-col ms-1 gap-1">
                <h3 className="text-xl font-bold">Salman</h3>
                <p className="text-sm">Salmanmohamed@gmail.com</p>
              </div>
            </div>
            <div className=" my-4  pb-4">
              <input
                type="text"
                className="search w-full  bg-transparent text-slate-300 border-solid border-2 rounded-lg shadow-xl shadow-slate-500 border-gray-500 border-b-4 focus:outline-none h-8 p-3"
                placeholder="Search"
              />
              <div className="tasks and important text-start font-bold text-2xl cursor-pointer flex flex-col gap-10 mt-5">
                <Link href="/">
                  <h1 className="flex items-center gap-3">
                    <BiHome />
                    Tasks
                  </h1>
                </Link>
                <Link href="/important">
                  <h1 className="flex items-center gap-3">
                    <BsStar />
                    Important
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default NavBar;
