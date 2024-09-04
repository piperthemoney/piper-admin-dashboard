import { useState } from "react";
import { useCustomSnackbar } from "./snackbar";
import generateCode from "../api/generatecode";
import { useNavigate } from "react-router-dom";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { IoTimer } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const GenerateCode = ({ closeSidebar }) => {
  const navigate = useNavigate();
  const { notify } = useCustomSnackbar();
  const [merchant, setMerchant] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [lifespan, setLifespan] = useState("");
  const currentDate = new Date(); // Get the current date

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      merchant,
      quantity: parseInt(quantity),
      lifespan,
    };
    const res = await generateCode(data);
    if (res.code === 201) {
      notify("Code generated successfully", "success");
      return closeSidebar();
    } else if (res) {
      return notify(res.response.data.message, "error");
    } else {
      return notify("Something went wrong", "error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="h-full px-8 rounded-lg shadow-md w-96">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold mb-5">Create Piper Accounts</p>
        </div>
        <button className="absolute top-0 end-0 p-2" onClick={closeSidebar}>
          <IoClose className="text-2xl" />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-lg font-bold text-gray-700"
              htmlFor="merchant"
            >
              Code Create Date
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdOutlineCalendarMonth className="text-2xl" />
              </div>
              <input
                type="text"
                id="input-group-1"
                value={formatDate(currentDate)}
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-bold text-gray-700"
              htmlFor="merchant"
            >
              Merchant Name
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaRegUserCircle className="text-2xl" />
              </div>
              <input
                type="text"
                value={merchant}
                onChange={(e) => setMerchant(e.target.value)}
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="marchant name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              //   placeholder="Enter the quantity"
              className="block text-lg font-bold text-gray-700"
              htmlFor="quantity"
            >
              Account Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <LuTicket className="text-2xl" />
              </div>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="marchant name"
              />
            </div>
            <div className="flex gap-2 mt-1">
              <CiCircleInfo className="text-2xl" />
              <p className="text-md">
                The Maximum numbers for creating account is 100
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="lifespan"
            >
              Lifespan
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <IoTimer className="text-2xl" />
              </div>
              <input
                type="text"
                value={lifespan}
                onChange={(e) => setLifespan(e.target.value)}
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="enter your account duration"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Generate Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenerateCode;
