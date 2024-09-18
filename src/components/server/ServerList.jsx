import { FiWifi } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { TbTool } from "react-icons/tb";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Modal from "./Model";

function ServerList({ servers, id, onChildAction }) {
  const [_id, setId] = useState("");
  const [link, setLink] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    onChildAction();
  }, [isModalOpen]);

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
      </div>

      <div>
        <div className="text-white p-2">
          <div className="flex justify-around">
            {Object.entries(groupedServers).map(
              ([geoLocation, serverList], index) => (
                <div key={geoLocation} className="w-1/3 p-4 flex">
                  <div>
                    <div className="text-xl mb-5 flex items-center justify-between">
                      {geoLocation === "SG" && "🇸🇬"}
                      {geoLocation === "HK" && "🇭🇰"}
                      {geoLocation === "KR" && "🇰🇷"}
                      {geoLocation === "US" && "🇺🇸"}
                      {geoLocation === "DE" && "🇩🇪"}
                      <span>{geoLocation} Server</span>
                    </div>
                    {serverList.map((server, index) => (
                      <div key={server._id} className="my-2 rounded-lg">
                        <div className="flex justify-between">
                          <p className="text-xl font-medium">
                            IP Address {index + 1}
                          </p>
                          <TbTool
                            className="text-xl hover:text-primary cursor-pointer"
                            onClick={() => {
                              setModalOpen(true);
                              setId(server._id);
                              setLink(server.vlessServers);
                            }}
                          />
                        </div>
                        {/* <p>Response Time: 1000ms</p> */}
                        <div className="border mb-2 border-gray-500 flex justify-between px-4 py-2 rounded-lg">
                          <BiWorld className="text-2xl" />
                          <p className="font-medium">{server.serverAddress}</p>
                        </div>
                        <div className="border border-gray-500 flex justify-between px-4 py-2 rounded-lg">
                          <BiWorld className="text-2xl me-3" />
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        id={id}
        _id={_id}
        link={link}
      />
    </div>
  );
}

ServerList.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      geoLocation: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      serverAddress: PropTypes.string.isRequired,
      hostname: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  onChildAction: PropTypes.func.isRequired,
};

export default ServerList;
