import { NavLink } from "react-router-dom";
import { LuTicket } from "react-icons/lu";
import { IoMdExit } from "react-icons/io";
import { MdOutlineTroubleshoot } from "react-icons/md";
import { LuFolderCog } from "react-icons/lu";
import { MdMonitorHeart } from "react-icons/md";
import logo from "./../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-secondary text-white w-64">
      <div className="flex items-center justify-center py-10">
        <img src={logo} />
        <p className="decoration-wavy font-bold px-5 font-squada text-[48px]">
          Piper
        </p>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block flex gap-4 p-2 rounded ${
                  isActive
                    ? "bg-primary text-black font-semibold"
                    : "hover:bg-gray-700 text-white"
                }`
              }
            >
              <MdOutlineTroubleshoot className="text-2xl" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/acc"
              className={({ isActive }) =>
                `block flex gap-4 p-2 rounded ${
                  isActive
                    ? "bg-primary text-black font-semibold"
                    : "hover:bg-gray-700 text-white"
                }`
              }
            >
              <LuTicket className="text-2xl" />
              Account List
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/batch"
              className={({ isActive }) =>
                `block flex gap-4 p-2 rounded ${
                  isActive
                    ? "bg-primary text-black font-semibold"
                    : "hover:bg-gray-700 text-white"
                }`
              }
            >
              <LuFolderCog className="text-2xl" />
              Batch Management
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/server"
              className={({ isActive }) =>
                `block flex gap-4 p-2 rounded ${
                  isActive
                    ? "bg-primary text-black font-semibold"
                    : "hover:bg-gray-700 text-white"
                }`
              }
            >
              <MdMonitorHeart className="text-2xl" />
              Server Monitor
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/auth/sign-in"
              className={({ isActive }) =>
                `block flex gap-4 p-2 rounded ${
                  isActive
                    ? "bg-primary text-black font-semibold"
                    : "hover:bg-gray-700 text-white"
                }`
              }
              onClick={() => {
                localStorage.removeItem("piper-token");
              }}
            >
              <IoMdExit className="text-2xl" />
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
