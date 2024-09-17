import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiServer, FiWifi } from "react-icons/fi";
import getbatchdetail from "../../api/getbatchdetail";
import { useEffect, useState } from "react";
import ServerList from "./ServerList";

function ServerDetail() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [server, setServer] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleChildAction = () => {
    setRefresh(!refresh);
  };

  const getBatchDetatl = async () => {
    const res = await getbatchdetail(id);
    // console.log(res.data.serverData.length);
    setName(res.data.batch);
    setServer(res.data.serverData);
  };

  useEffect(() => {
    getBatchDetatl();
  }, [refresh]);

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
            <span className="ps-3 font-medium">{server.length} </span>
          </p>
        </div>
      </div>

      <div>
        <ServerList
          servers={server}
          id={id}
          onChildAction={handleChildAction}
        />
      </div>
    </div>
  );
}

export default ServerDetail;
