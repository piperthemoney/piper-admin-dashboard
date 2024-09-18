import { useState } from "react";
import { FiServer } from "react-icons/fi";
import { FaWifi } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const GenerateServer = ({ closeSidebar }) => {
  const [name, setName] = useState("");
  const [serverlink, setServerlink] = useState("");
  const [serverArray, setServerArray] = useState([]);
  // const currentDate = new Date(); // Get the current date

  // const formatDate = (date) => {
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  //   const year = date.getFullYear();
  //   return `${day}.${month}.${year}`;
  // };

  const handleServer = (e) => {
    e.preventDefault();
    setServerArray((perv) => [...perv, serverlink]);
    setServerlink("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverData = serverArray.map((item) => ({ vlessServers: item }));
    const data = {
      batch: name,
      serverData,
    };
    // console.log(data);
    const res = await createbatch(data);
    console.log(res);
    if (res.code === 201) {
      closeSidebar();
      setName("");
      setServerArray([]);
    }
  };

  return (
    <div className="flex bg-secondary justify-center items-center h-screen overflow-y-auto py-5 relative">
      <div
        className="h-full flex justify-center flex-col
       px-8 rounded-lg w-96 bg-secondary"
      >
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold mb-5">Create New Batch</p>
        </div>
        <button className="absolute top-0 end-0 p-2" onClick={closeSidebar}>
          <IoClose className="text-2xl" />
        </button>
        <form>
          <div className="mb-4">
            <label
              className="block text-lg font-bold text-white"
              htmlFor="merchant"
            >
              Batch Name
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FiServer className="text-2xl" />
              </div>
              <input
                type="text"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                id="input-group-1"
                className="bg-black border border-gray-300 text-white-100 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Batch Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-bold text-white"
              htmlFor="quantity"
            >
              Server
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaWifi className="text-2xl" />
              </div>
              <input
                type="text"
                value={serverlink}
                autoComplete="off"
                onChange={(e) => setServerlink(e.target.value)}
                id="input-group-1"
                className="bg-black border border-gray-300 text-white-100 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-5 py-2.5"
                placeholder="Enter your server address"
              />
            </div>
            <button
              className="flex mt-2 items-center justify-center w-full bg-black border border-gray-300 text-white-100 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-5 py-2.5"
              onClick={handleServer}
            >
              <FiUpload className="text-xl" />
              <p className="text-sm ms-2">Upload Server</p>
            </button>
          </div>

          <div className="custom-scrollbar scrollbar-hide overflow-y-auto h-[180px] overflow-x-hidden">
            {serverArray.length > 0 &&
              serverArray.map((server, index) => (
                <div
                  key={index}
                  className="custom-scrollbar flex items-center bg-black text-white-100 text-sm mb-2 rounded-lg block w-full px-2 py-2.5"
                >
                  <FiServer className="text-xl" />
                  <p className="text-sm w-[300px] line-clamp-1 ms-2">
                    {server}
                  </p>
                  <button
                    className="hover:text-primary focus:scale-110"
                    onClick={(e) => {
                      e.preventDefault();
                      const updatedArray = serverArray.filter(
                        (_, i) => i !== index
                      );
                      setServerArray(updatedArray);
                    }}
                  >
                    <IoClose className="text-xl" />
                  </button>
                </div>
              ))}
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full mt-5 bg-primary text-black p-2 rounded-md
             transition duration-200 hover:text-primary hover:bg-black hover:border hover:border-primary"
          >
            Create Batch
          </button>
        </form>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";
import createbatch from "../../api/createbatch";

GenerateServer.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
};

export default GenerateServer;
