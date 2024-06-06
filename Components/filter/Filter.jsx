"use client";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { GoPeople } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const peopleList = [
  { id: 1, name: "John Doe", tags: ["Manager", "Finance"] },
  { id: 2, name: "Jane Smith", tags: ["Engineer", "IT"] },
  { id: 3, name: "Alex Johnson", tags: ["Designer", "Creative"] },
  { id: 4, name: "Mike Brown", tags: ["Developer", "Tech"] },
  { id: 5, name: "Emily Davis", tags: ["Analyst", "Data"] },
  { id: 6, name: "Chris Wilson", tags: ["Marketing", "Sales"] },
  { id: 7, name: "Sarah Taylor", tags: ["HR", "Operations"] },
  { id: 8, name: "Ryan Martinez", tags: ["Consultant", "Strategy"] },
  { id: 9, name: "Jessica Miller", tags: ["Writer", "Content"] },
  { id: 10, name: "David Anderson", tags: ["Customer Support", "Service"] },
];

const Filter = () => {
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState("name");
  const [selectedOption1, setSelectedOption1] = useState("scheduled_date");
  const [toggleOption, setToggleOption] = useState("scheduled_date");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredPeople = peopleList.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClick = (option) => {
    setSelectedOption1(option);
  };

  const getLinkClass = (option) => {
    const isActive = selectedOption1 === option;
    return `inline-flex items-center gap-2 px-4 py-3 w-full ${
      isActive ? "bg-[#d2deeb] rounded-lg" : ""
    }`;
  };

  const handleFromClick = () => {
    setIsFromOpen(true);
    setIsToOpen(false);
  };

  const handleToClick = () => {
    setIsFromOpen(false);
    setIsToOpen(true);
  };
  return (
      <>
        <div className="md:flex h-[348px] w-[612px] border-b ">
          <ul className="text-sm font-medium text-gray-800 dark:text-gray-700 md:me-4 mb-4 md:mb-0 basis-2/5 bg-[#F8FAFC] p-2 border-r">
            <li>
              <Link
                href="#"
                className={getLinkClass("scheduled_date")}
                onClick={() => {
                  handleClick("scheduled_date");
                  setToggleOption("scheduled_date");
                }}
              >
                <SlCalender />
                Scheduled Date
              </Link>
            </li>
            <li>
            <Link
                href="#"
                className={getLinkClass("people")}
                onClick={() => {
                  handleClick("people");
                  setToggleOption("people");
                }}
              >
                <GoPeople />
                People
              </Link>
            </li>
            <li>
            <Link
                href="#"
                className={getLinkClass("services")}
                onClick={() => {
                  handleClick("services");
                  setToggleOption("services");
                }}
              >
                <LuLayoutDashboard />
                Services / Products
              </Link>
            </li>
          </ul>
          <div className="py-4 text-medium  rounded-lg w-full basis-3/5 ">
            {toggleOption === "scheduled_date" && (
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">
                  Show order for
                </h3>
                <form className="max-w-sm mx-auto">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-700 custom-select"
                  >
                    <option selected>All</option>
                    <option value="US">Custom</option>
                    <option value="CA">Last 30 days</option>
                    <option value="FR">This month</option>
                    <option value="FR">Last month</option>
                    <option value="DE">This quarter</option>
                    <option value="DE">2 quarter ago</option>
                  </select>
                </form>

                <div className="flex gap-2 mt-4 ">
                  <div className="relative">
                    <h3 className="text-sm font-medium text-gray-800 mb-2">
                      From
                    </h3>
                    <button
                      type="button"
                      onClick={handleFromClick}
                      className="text-gray-600 hover:border-gray-100 border border-gray-100 rounded-lg text-[12px] pl-3 pr-10 font-semibold py-2.5 inline-flex gap-2 items-center dark:border-gray-400 dark:text-gray-700 dark:hover:border-gray-700"
                    >
                      <SlCalender />
                      Pick a date
                    </button>

                    {isFromOpen && (
                      <div className="absolute z-50 p-4 pt-0 rounded-lg shadow-lg ">
                        <Flatpickr
                          onChange={(selectedDates) =>
                            setFromDate(selectedDates[0])
                          }
                          className="mx-auto sm:mx-0 flex justify-center bg-gray-50 rounded w-[200px]"
                          onClose={() => setIsFromOpen(false)}
                          options={{ inline: true }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <h3 className="text-sm font-medium text-gray-800 mb-2">
                      To
                    </h3>
                    <div>
                      <button
                        type="button"
                        onClick={handleToClick}
                        className="text-gray-600 hover:border-gray-100 border border-gray-100 rounded-lg text-[12px] pl-3 pr-10 font-semibold  py-2.5 inline-flex gap-2 items-center dark:border-gray-400 dark:text-gray-700 dark:hover:border-gray-700"
                      >
                        <SlCalender />
                        Pick a date
                      </button>

                      {isToOpen && (
                        <div className="absolute z-50 p-4 pt-0 rounded-lg shadow-lg">
                          <Flatpickr
                            onChange={(selectedDates) =>
                              setToDate(selectedDates[0])
                            }
                            className="mx-auto sm:mx-0 flex justify-center bg-gray-50 rounded w-[200px]"
                            onClose={() => setIsToOpen(false)}
                            options={{ inline: true }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {toggleOption === "people" && (
              <div className="relative">
                <input
                  type="text"
                  className="h-10 w-full rounded-lg pl-10 pr-4 p-4 shadow-md"
                  placeholder="Search Payer or attendee name"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CiSearch className="text-xl text-gray-600" />
                </div>
              </div>
            )}

            {toggleOption === "services" && (
              <div className=" flex items-center justify-center">
                <form className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="searchOption"
                        value="name"
                        checked={selectedOption=="name"}
                        onChange={() => setSelectedOption("name")}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Search by Name</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="searchOption"
                        value="tag"
                        checked={selectedOption=="tag"}
                        onChange={() => setSelectedOption("tag")}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Search by Tag</span>
                    </label>
                  </div>

                  {selectedOption === "name" && (
                    <div className="relative">
                      <input
                        type="text"
                        className="h-10 w-full rounded-lg pl-10 pr-4 p-4 shadow-md"
                        placeholder="Search Payer or attendee name"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <CiSearch className="text-xl text-gray-600" />
                      </div>
                    </div>
                  )}

                  {selectedOption === "tag" && (
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="serviceType"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Service Type:
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option value="service1" selected>
                            Show all service type
                          </option>
                          <option value="service2">Class</option>
                          <option value="service3">Appointment</option>
                          <option value="service4">Facilty</option>
                          <option value="service5">Class Pack</option>
                          <option value="service6">Membership</option>
                          <option value="service7">Gereral items</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="status"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Status:
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option value="active" selected>
                            Select service type
                          </option>
                          <option value="inactive">Show all</option>
                          <option value="inactive">Public</option>
                          <option value="inactive">Private</option>
                          <option value="inactive">Disable</option>
                          <option value="inactive">Draft</option>
                        </select>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}

            {selectedOption !== "tag" || toggleOption === "people" ? searchQuery.length >= 1 && (
              <div>
                {filteredPeople
                  .slice(0, 10)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((person) => (
                    <div key={person.id}>
                      <span>{person.name}</span>
                      <span>{person.tags.join(", ")}</span>
                    </div>
                  ))}
              </div>
            ):""
          }
          </div>

          <div className="flex gap-4 w-2/5 justify-center mt-2 absolute right-2 bottom-3 ">
            <div className="h-10 w-full rounded-md bg-[#e6eff8] px-3   flex  items-center justify-center ">
              Reset to Default
            </div>
            <div className="h-10 w-1/2 rounded-md text-white bg-black flex items-center justify-center ">
              Apply
            </div>
          </div>
        </div>
    </>
  );
};

export default Filter;
