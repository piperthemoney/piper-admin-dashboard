import { useState } from "react";
import { useCustomSnackbar } from "./snackbar";
import generateCode from "../api/generatecode";
import { useNavigate } from "react-router-dom";

const GenerateCode = () => {
  const navigate = useNavigate();
  const { notify } = useCustomSnackbar();
  const [merchant, setMerchant] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [lifespan, setLifespan] = useState("");

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
      return navigate("/");
    } else if (res) {
      return notify(res.response.data.message, "error");
    } else {
      return notify("Something went wrong", "error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Generate Code</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="merchant"
            >
              Merchant Name
            </label>
            <input
              type="text"
              placeholder="Enter the merchant name"
              id="merchant"
              value={merchant}
              onChange={(e) => setMerchant(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              //   placeholder="Enter the quantity"
              className="block text-sm font-medium text-gray-700"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="lifespan"
            >
              Lifespan
            </label>
            <input
              type="text"
              id="lifespan"
              value={lifespan}
              placeholder="Eg. 1day, 1week, 1month, 1year"
              onChange={(e) => setLifespan(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
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
