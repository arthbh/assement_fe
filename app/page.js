"use client";
import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import {
  LuChevronsUpDown,
  LuCircleDot,
  LuDownload,
  LuLayoutDashboard,
  LuRefreshCcw,
} from "react-icons/lu";
import {
  CiFilter,
  CiGlobe,
  CiHashtag,
  CiSearch,
  CiShare1,
} from "react-icons/ci";
import { BiLoaderCircle } from "react-icons/bi";
import { RiLayoutColumnFill } from "react-icons/ri";
import { LuHourglass } from "react-icons/lu";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { BsLayoutSplit } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import Filter from "@/Components/filter/Filter";
import EditColumn from "@/Components/editColumn/EditColumn";

export default function Home(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isColumn, setIsColumn] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleColumn = () => {
    setIsColumn(!isColumn);
  };
  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };
  return (
    <div className="flex p-4 ">
      {/* <Left/>  */}
      <div
      className={`transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'basis-1/5'
      } p-4 bg-[#F8FAFC] flex flex-col justify-between `}
    >
      <div className="">
        <div className="flex items-center justify-between mb-9">
          <div className="flex gap-2 items-center">
            <BiLoaderCircle
              className="cursor-pointer text-3xl"
              onClick={() => setIsCollapsed(false)}
            />
            {!isCollapsed && (
              <h1 className="text-2xl font-extrabold">Front.Desk</h1>
            )}
          </div>
          {!isCollapsed && (
            <RiLayoutColumnFill
              onClick={toggleCollapse}
              className="cursor-pointer text-xl"
            />
          )}
        </div>
        {!isCollapsed && (
          <div className="flex justify-between items-center text-gray-700 bg-white w-full h-12 rounded-lg shadow-md p-4">
            <p>Location Name</p>
            <FaArrowRightArrowLeft />
          </div>
        )}

        {!isCollapsed && (
          <div className="w-[90%] mx-auto h-16 bg-[#c9ddf0] rounded-md shadow-md px-4 mb-4">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg font-bold">
                8:30 AM <span className="text-lg font-[500]">Tue 20 Jan</span>
              </h1>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-sm">
                  <CiGlobe className="text-gray-500 text-lg" />
                  UTC: +5 hours
                </div>
                <IoIosArrowDown className="text-gray-600 text-lg" />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4 mt-10 text-gray-800">
          <span className="flex gap-2 items-center p-2">
            <RiLayoutColumnFill className="text-2xl text-gray-600" />
            {!isCollapsed && <h1>Orders</h1>}
          </span>
          <span className="flex gap-2 items-center p-2">
            <AiOutlineBorderlessTable className="text-2xl text-gray-600" />
            {!isCollapsed && <h1>Subscriptions</h1>}
          </span>
          <span className="flex gap-2 items-center p-2">
            <SlCalender className="text-xl text-gray-600" />
            {!isCollapsed && <h1>Calendar</h1>}
          </span>
          <span className="flex gap-2 items-center bg-white p-2 rounded-md shadow">
            <LuHourglass className="text-2xl text-gray-600" />
            {!isCollapsed && <h1>Waitlist</h1>}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-end w-full">
        <div className="py-3 px-2">
          <span className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <LuLayoutDashboard className="text-xl" />
              {!isCollapsed && <h1>Dashboard</h1>}
            </div>
            <CiShare1 className="text-xl" />
          </span>
        </div>

        <div className="flow-root bg-white px-2 rounded-md">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Neil image"
                  />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Admin name
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      adminname@mail.com
                    </p>
                  </div>
                )}
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  <IoIosArrowDown />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flow-root px-2">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <IoHelpCircleOutline className="text-2xl text-gray-500" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Help center
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      @2024 Omnify.Inc.
                    </p>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      {/* Right */}
      <div className="basis-4/5 p-4 ">
        <h1 className="text-xl font-medium leading-7 ">Wailist</h1>
        <div className="flex justify-evenly gap-4 mt-6 ">
          <input
            type="text"
            placeholder="All Wailists 100"
            className="w-full h-12 rounded-lg p-4 border-2 border-gray-300 focus:border-gray-300"
          />

          <input
            type="text"
            placeholder="Newly Added 100"
            className="w-full h-12 rounded-lg p-4 border"
          />
          <input
            type="text"
            placeholder="Leads 100"
            className="w-full h-12 rounded-lg p-4 border"
          />
        </div>
        <div className="flex justify-between items-center">
          <div
            className="flex justify-center items-center w-32 h-12 rounded-md my-6 gap-2 bg-[#F8FAFC]  cursor-pointer "
            onClick={toggleFilter}
          >
            <CiFilter />
            <p>Add Filter</p>
          </div>
          <div className="flex justify-evenly items-center gap-6">
            <div className="relative">
              <input
                type="text"
                className="h-10 w-full rounded-lg pl-10 pr-4 p-4 shadow-md"
                placeholder="Search client"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiSearch className="text-xl text-gray-600" />
              </div>
            </div>

            <LuRefreshCcw className="text-xl text-gray-600" />
            <BsLayoutSplit
              className="text-xl text-gray-600 cursor-pointer "
              onClick={toggleColumn}
            />
            <LuDownload className="text-xl text-gray-600" />
          </div>
        </div>

        <div className="relative">
          {isColumn && <EditColumn />}
          {isFilter && <Filter />}
          {/* main */}
          <div
            className={`transition-all duration-100 ${
              isCollapsed ? "w-[1400px]" : "w-[1180px]"
            } overflow-x-auto  h-[550px] overflow-y-auto custom-scrollbar shadow-md sm:rounded-lg`}
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b dark:border-gray-300 bg-[#F8FAFC]">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-100"
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex gap-2 items-center">
                      <SlCalender />
                      Created On
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex gap-2 items-center">
                      <GoPerson />
                      Payer
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex gap-2 items-center">
                      <LuCircleDot />
                      Status
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex gap-2 items-center">
                      <CiHashtag />
                      Email
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex gap-2 items-center">
                      <CiHashtag />
                      Payer Phone
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex gap-2 items-center">
                      <CiHashtag />
                      Services
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex gap-2 items-center">
                      <SlCalender />
                      Scheduled
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
                  >
                    Sun, 07 Jan 2024 2:42 PM
                  </th>
                  <td className="px-6 py-4">Theodore T.C. Calvin</td>
                  <td className="px-8 py-4">
                    <span className="text-blue-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e4f1fd] dark:text-blue-500">
                      Lead
                    </span>
                  </td>
                  <td className="px-6 py-4">theodre@gmail.com</td>
                  <td className="px-6 py-4">+91 +966559186876</td>
                  <td className="px-6 py-4">Private Language Session</td>
                  <td className="px-6 py-4">Sun, 07 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Sat, 06 Jan 2024 2:42 PM
                  </th>
                  <td className="px-6 py-4">Hannibal Smith</td>
                  <td className="px-7 py-4">
                    <span className="text-green-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#c1f7e6] dark:text-green-500">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">theodre@gmail.com</td>
                  <td className="px-6 py-4">+91 +966578632254</td>
                  <td className="px-6 py-4">
                    Swin begginer for className new Session
                  </td>
                  <td className="px-6 py-4">Sun, 07 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Fri, 05 Jan 2024 2:42 PM
                  </th>
                  <td className="px-6 py-4">April Curtis</td>
                  <td className="px-6 py-4">
                    <span className="text-gray-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e9edea] dark:text-gray-500">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4">theodre@gmail.com</td>
                  <td className="px-6 py-4">+91 +966558441503</td>
                  <td className="px-6 py-4">Fitness Session</td>
                  <td className="px-6 py-4">Sat, 06 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Thu, 04 Jan 2024 2:42 PM
                  </th>
                  <td className="px-6 py-4">Michael Knight</td>
                  <td className="px-7 py-4">
                    <span className="text-green-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#c1f7e6] dark:text-green-500">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">theodre@gmail.com</td>
                  <td className="px-6 py-4">+91 +966578632254</td>
                  <td className="px-6 py-4">Arobics Session</td>
                  <td className="px-6 py-4">Fri, 06 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Wed, 03 Jan 2024 2:42 PM
                  </th>
                  <td className="px-6 py-4">Templeton Peck</td>
                  <td className="px-7 py-4">
                    <span className="text-green-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#c1f7e6] dark:text-green-500">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">theodre@gmail.com</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Boxing Session</td>
                  <td className="px-6 py-4">Thu, 04 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Tue, 02 Jan 2024 2:42 PM
                  </th>
                  <td className="px-6 py-4">Theodore T.C. Calvin</td>
                  <td className="px-7 py-4">
                    <span className="text-green-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#c1f7e6] dark:text-green-500">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">theodre@gmail.com</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Kids Play Session</td>
                  <td className="px-6 py-4">Thu, 04 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Mon, 01 Jan 2024 2:42 PM
                  </th>
                  <td className="px-6 py-4">Michael Knight</td>
                  <td className="px-8 py-4">
                    <span className="text-blue-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e4f1fd] dark:text-blue-500">
                      Lead
                    </span>
                  </td>
                  <td className="px-6 py-4">Mikeh@gmail.com</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Appointment Session</td>
                  <td className="px-6 py-4">Sat, 06 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Sun, 30 Dec 2023 2:42 PM
                  </th>
                  <td className="px-6 py-4">Mike Torello</td>
                  <td className="px-8 py-4">
                    <span className="text-blue-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e4f1fd] dark:text-blue-500">
                      Lead
                    </span>
                  </td>
                  <td className="px-6 py-4">theodre@gmail.com</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Exercise Session</td>
                  <td className="px-6 py-4">Sat, 29 Dec 2023 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Sat, 29 Dec 2023 2:42 PM
                  </th>
                  <td className="px-6 py-4">Templeton Peck</td>
                  <td className="px-8 py-4">
                    <span className="text-blue-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e4f1fd] dark:text-blue-500">
                      Lead
                    </span>
                  </td>
                  <td className="px-6 py-4">templeton@gmail.com</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Session Session</td>
                  <td className="px-6 py-4">Sun, 07 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Wed, 28 Dec 2023 2:42 PM
                  </th>
                  <td className="px-6 py-4">Peter Thornton</td>
                  <td className="px-6 py-4">
                    <span className="text-gray-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e9edea] dark:text-gray-500">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4">peterthornton@gmail.com</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Boxing Session</td>
                  <td className="px-6 py-4">Wed, 27 Dec 2023 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Sun, 26 Dec 2023 2:42 PM
                  </th>
                  <td className="px-6 py-4">Lynn Tanner</td>
                  <td className="px-6 py-4">
                    <span className="text-gray-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e9edea] dark:text-gray-500">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4">Lynn@gmail.com</td>
                  <td className="px-6 py-4">+91 +966508441454</td>
                  <td className="px-6 py-4">Fitness Session</td>
                  <td className="px-6 py-4">Mon, 27 Dec 2023 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Sun, 25 Dec 2023 2:42 PM
                  </th>
                  <td className="px-6 py-4">Col. Roderick Decker</td>
                  <td className="px-6 py-4">
                    <span className="text-gray-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e9edea] dark:text-gray-500">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4">decker@gmail.com</td>
                  <td className="px-6 py-4">+91 +966558441493</td>
                  <td className="px-6 py-4">Kids Play Session</td>
                  <td className="px-6 py-4">Sun, 07 Jan 2024 2:42 PM</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 text-gray-800">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Sun, 25 Dec 2023 2:42 PM
                  </th>
                  <td className="px-6 py-4">Col. Roderick Decker</td>
                  <td className="px-8 py-4">
                    <span className="text-blue-800 text-sm font-medium me-2 px-3 py-1 rounded-2xl bg-[#e4f1fd] dark:text-blue-500">
                      Lead
                    </span>
                  </td>
                  <td className="px-6 py-4">decker@gmail.com</td>
                  <td className="px-6 py-4">+91 +966558441493</td>
                  <td className="px-6 py-4">Kids Play Session</td>
                  <td className="px-6 py-4">Sun, 07 Jan 2024 2:42 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* navigation */}
        <div className="flex justify-between mt-4 items-center ">
          <span className="flex gap-2 items-center">
            Displaying{" "}
            <div className="flex gap-2 items-center bg-[#F8FAFC] px-4 py-2 rounded-lg ">
              15
              <LuChevronsUpDown />
            </div>
            out of <span className="text-gray-900 font-semibold ">104</span>
          </span>
          <div>
            <ul className="inline-flex -space-x-px text-base h-10">
              <li className="flex items-center justify-center px-2 h-10 leading-tight text-gray-600 ">
                <IoIosArrowBack />
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-600   hover:text-gray-900 dark:text-gray-700 "
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-600   hover:text-gray-900 dark:text-gray-700 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-600 border border-gray-400 rounded-md hover:text-gray-900 dark:text-gray-700 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-600  hover:text-gray-900 dark:border-gray-700 dark:text-gray-700 "
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-600  hover:text-gray-900 dark:border-gray-700 dark:text-gray-700 "
                >
                  Next
                </a>
              </li>
              <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-600 ">
                <IoIosArrowForward />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


