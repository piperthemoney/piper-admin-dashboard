import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiServer, FiWifi } from "react-icons/fi";

function ServerDetail() {
  return (
    <div className="p-4">
      <Link
        to="/server"
        className="flex items-center space-x-2  cursor-pointer"
      >
        <FaArrowLeftLong className="text-2xl" />
        <span className="text-2xl font-bold ps-3 ">
          Server Management Details
        </span>
      </Link>

      <div className="my-5 flex justify-between items-center bg-secondary px-6 py-6  w-full rounded-lg">
        <div>
          <h2 className="text-xl font-semibold mb-3 ">Batch Name</h2>
          <p className="flex items-center">
            <FiServer className="text-2xl" />
            <span className="ps-3 font-medium"> {name}</span>
          </p>
        </div>

        <div className="h-10 border-l-2 border-gray-700"></div>

        <div>
          <h2 className="text-xl font-bold mb-3">Server Number</h2>
          <p className="flex items-center">
            <FiWifi className="text-2xl" />
            <span className="ps-3 font-medium"> </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServerDetail;
