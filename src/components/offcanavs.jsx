import { useState } from "react";
import GenerateCode from "./GenerateCode";

const OffCanvasSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Toggle Sidebar
      </button>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed right-0 top-0 w-200 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4">
          <GenerateCode closeSidebar={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default OffCanvasSidebar;
