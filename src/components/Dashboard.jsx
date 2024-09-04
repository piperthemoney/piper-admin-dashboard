import { useRef, useState } from "react";
import GenerateCode from "./GenerateCode";
import { LuTicket } from "react-icons/lu";
import TicketTable from "./marchentTable/TicketTable";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search,setSearch ] = useState("");
  const childRef = useRef();

  const handleKeyPress = (event) => {  
    if (event.key === "Enter") {  
      childRef.current.invokeChildFunction();  
    }  
};

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-col">
      <div className="flex justify-between">
        <div className="relative w-[400px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <IoSearch className="text-2xl" />
          </div>
          <input
            type="search"
            id="default-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}  
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-white focus:border-white"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-4 text-white absolute end-2.5 bottom-[7px] bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            <MdOutlineCalendarMonth className="text-2xl" />
            {new Date().toLocaleDateString()}
          </button>
        </div>
        <button
          onClick={toggleSidebar}
          className="px-5 py-2 bg-gray-800 text-white rounded-md flex gap-4 items-center"
        >
          <LuTicket className="text-2xl" />
          <span>Create Account</span>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed right-0 z-10 top-0 w-200 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4">
          <GenerateCode closeSidebar={toggleSidebar} />
        </div>
      </div>
      <div className="flex-1 py-4">
        <TicketTable search={search} ref={childRef} />
      </div>
    </div>
  );
};

export default Dashboard;
