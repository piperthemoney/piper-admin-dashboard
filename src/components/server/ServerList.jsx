import { FiWifi } from "react-icons/fi";
import { TbTool } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
function ServerList({ servers }) {
  console.log(servers);

  // Group servers by geoLocation
  const groupedServers =
    servers?.reduce((acc, server) => {
      const { geoLocation } = server;
      if (!acc[geoLocation]) {
        acc[geoLocation] = [];
      }
      acc[geoLocation].push(server);
      return acc;
    }, {}) || {};

  return (
    <div className="mt-5 bg-secondary p-5 rounded-lg">
      <div className="flex justify-between">
        <div className="flex items-center">
          <FiWifi className="text-2xl " />
          <p className="ms-5 text-xl font-medium">Servers</p>
        </div>

        <div>
          <button className="flex items-center bg-primary py-2 px-4 rounded-lg text-black font-bold hover:bg-black hover:border hover:border-primary hover:text-primary">
            <TbTool className="text-2xl" />
            <p className="ms-5 text-xl font-medium">Fix Server</p>
          </button>
        </div>
      </div>

      <div>
        <div className="text-white p-2">
          <div className="flex justify-around">
            {Object.entries(groupedServers).map(
              ([geoLocation, serverList], index) => (
                <div key={geoLocation} className="w-1/3 p-4 flex">
                  <div>
                    <div className="text-xl flex items-center justify-between">
                      {geoLocation === "SG" && "🇸🇬"}
                      {geoLocation === "HK" && "🇭🇰"}
                      {geoLocation === "KR" && "🇰🇷"}
                      {geoLocation === "US" && "🇺🇸"}
                      {geoLocation === "DE" && "🇩🇪"}
                      <span>{geoLocation} Server</span>
                    </div>
                    {serverList.map((server, index) => (
                      <div key={server._id} className="my-2 rounded-lg">
                        <p className="text-xl font-medium">
                          IP Address {index + 1}
                        </p>
                        {/* <p>Response Time: 1000ms</p> */}
                        <div className="border mb-2 border-gray-500 flex justify-between px-4 py-2 rounded-lg">
                          <BiWorld className="text-2xl" />
                          <p className="font-medium">{server.serverAddress}</p>
                        </div>
                        <div className="border border-gray-500 flex justify-between px-4 py-2 rounded-lg">
                          <BiWorld className="text-2xl" />
                          <p className="font-medium">{server.hostname}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Conditional Divider */}
                  {index !== Object.keys(groupedServers).length - 1 && (
                    <div className="ms-5 border-l-2 border-gray-700"></div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";

ServerList.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      geoLocation: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      serverAddress: PropTypes.string.isRequired,
      hostname: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ServerList;
