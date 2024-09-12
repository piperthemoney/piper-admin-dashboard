import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { FiServer } from "react-icons/fi";
import GenerateServer from "./GenerateServer";
import "./server.css";

function Server() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-5">
      <p className="text-2xl font-medium">Server Management</p>
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-5">
          <div className="relative w-[400px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
              <IoSearch className="text-2xl text-white" />
            </div>
            <input
              type="text"
              id="default-search"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              // onKeyPress={handleKeyPress}
              className="block w-full font-semibold p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-black focus:ring-white focus:border-white"
              placeholder="Search Merchants"
              required
            />
            {search && (
              <MdOutlineCancel
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                // onClick={cancelSearch}
              />
            )}
          </div>
          {/*
           */}
        </div>
        <button
          onClick={toggleSidebar}
          className="px-5 py-2 bg-primary font-semibold text-black rounded-md flex gap-4 items-center hover:text-primary hover:border hover:border-blue-500 hover:bg-black transition duration-300"
        >
          <FiServer className="text-2xl" />
          <span>Create Server</span>
        </button>
      </div>
      {/* Backgroud fill when toggle */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      {/* toogle bar */}
      <div
        className={`fixed right-0 z-10 top-0 w-200 h-full shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          style={{
            borderRadius: "20px 0 0 20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.3)",
            borderTop: "none",
            borderBottom: "none",
            borderRight: "none",
            // background:"black"
          }}
        >
          <GenerateServer closeSidebar={toggleSidebar} />
        </div>
      </div>
    </div>
  );
}

export default Server;
