import { useState, useEffect } from "react";
import axios from "./../../axios";
import ReactCountryFlag from "react-country-flag";
import { TbTool } from "react-icons/tb";
import Modal from "../server/Model";
import Animation from "../Animation";
import animationData from "./../animations/loadingV2.json";

const ServerPing = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [_id, setId] = useState("");
  const [linkId, setLinkId] = useState("");
  const [link, setLink] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchServers = async () => {
    try {
      const response = await axios.get("api/v1/server-manager");
      const sortedServers = [...response.data.data].sort((a, b) => {
        if (a.serverData.status === "DOWN" && b.serverData.status !== "DOWN") {
          return -1;
        }
        if (a.serverData.status !== "DOWN" && b.serverData.status === "DOWN") {
          return 1;
        }
        return 0;
      });

      setServers(sortedServers); // Assuming the response is the same shape as your example
    } catch (err) {
      console.log(err);
      setError("Error fetching server data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServers();
  }, [loading]);

  console.log(servers);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        {/* <p className="text-primary font-bold text-center text-xl">Loading...</p> */}
        <div className="translate-y-[-100%]">
          <Animation animationData={animationData} />
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="w-full text-right">
        <button
          className="px-5 py-2 transition duration-300 bg-primary border border-black font-semibold text-black rounded-md hover:text-primary hover:border hover:border-blue-500 hover:bg-black"
          onClick={() => setLoading(true)}
        >
          Ping All Servers
        </button>
      </div>
      {servers.length > 0 && (
        <div className="w-full bg-secondary h-screen mt-5 overflow-y-auto max-h-[500px] rounded-lg">
          <table className="bg-secondary w-full">
            <thead className="text-left">
              <tr className="bg-white text-black text-left ">
                <th className="py-4 px-4 font-medium">No</th>
                <th className="py-4 px-4 font-medium">IP Address</th>
                <th className="py-4 px-4 font-medium">Status</th>
                <th className="py-4 px-4 font-medium">Ping</th>
                <th className="py-4 px-4 font-medium">Country</th>
                <th className="py-4 px-4 font-medium">Batch</th>
                <th className="py-4 px-4 font-medium"></th>
                {/* <th>Local Ping (MS)</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary">
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
              </tr>
              {servers.map((server, index) => (
                <tr
                  key={index}
                  className="bg-secondary font-bold text-white hover:bg-black"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{server.serverData.serverAddress}</td>
                  <td className="p-4">{server.serverData.status}</td>
                  <td
                    className={`p-4 ${
                      server.serverData.responseTime === "timeout"
                        ? "text-expired"
                        : server.serverData.responseTime !== null
                        ? "text-green-500"
                        : "text-black"
                    }`}
                  >
                    {server.serverData.responseTime === "timeout"
                      ? server.serverData.responseTime
                      : server.serverData.responseTime + " ms"}
                  </td>
                  <td className="p-4">
                    <ReactCountryFlag
                      countryCode={server.serverData.geoLocation}
                    />
                  </td>
                  <td>{server.batch}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setId(server.id);
                        setLink(server.serverData.vlessServers);
                        setLinkId(server.serverData.id);
                      }}
                      className="flex items-center px-4 py-2 text-[14px] gap-4 bg-white text-black py-1 px-3 rounded-lg hover:bg-black hover:text-white hover:border-white border-2"
                    >
                      <TbTool className="text-2xl" />
                      Change Server
                    </button>
                  </td>
                  {/* <td>
                  {server.localPing !== null
                    ? `${server.localPing} ms`
                    : "Error"}
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          fetchServers();
        }}
        id={_id}
        _id={linkId}
        link={link}
      />
    </div>
  );
};

export default ServerPing;
