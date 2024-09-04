import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { IoTimer } from "react-icons/io5";

function MarchentDetails() {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-2  cursor-pointer">
        <FaArrowLeftLong className='text-2xl'/>
        <span className="text-2xl font-bold ps-3">Purchase Details</span>
      </div>

      <div className="mt-4 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold mb-3">Marchant</h2>
            <p className="flex items-center">
              <FaRegUserCircle className='text-2xl'/>
             <span className='ps-3 font-bold'> May Than Oo</span>
            </p>
          </div>

          {/* <button className="text-white bg-black hover:bg-gray-800 rounded px-3 py-1 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.487a2.25 2.25 0 00-3.182 0l-9 9A2.25 2.25 0 004.5 14.25V18a.75.75 0 00.75.75h3.75a2.25 2.25 0 001.591-.659l9-9a2.25 2.25 0 000-3.182l-3-3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 6.75l6 6"
              />
            </svg>
            Edit Info
          </button> */}
        </div>

        <div className="mt-10 flex justify-between items-center w-full">
          <div className=''>
            <h2 className="text-2xl font-bold mb-3">Purchase Date</h2>
            <p className="flex items-center">
              <MdOutlineCalendarMonth className='text-2xl'/>
             <span className='ps-3 font-bold'> May Than Oo</span>
            </p>
          </div>

          <div className="h-10 border-l-2 border-gray-700"></div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Account Numbers</h2>
            <p className="flex items-center">
              <LuTicket className='text-2xl'/>
             <span className='ps-3 font-bold'> May Than Oo</span>
            </p>
          </div> 

          <div className="h-10 border-l-2 border-gray-700"></div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Accounts Duration</h2>
            <p className="flex items-center">
              <IoTimer className='text-2xl'/>
             <span className='ps-3 font-bold'> May Than Oo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarchentDetails;
