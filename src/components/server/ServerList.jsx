import { FiWifi } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { TbTool } from "react-icons/tb";
import { MdAddLink } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { RiMapPinLine } from "react-icons/ri";
import Modal from "./Model";
import "./server.css";
import AddServerLink from "./AddServerLink";

function ServerList({ servers, id, onChildAction }) {
  const [_id, setId] = useState("");
  const [link, setLink] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [addModelOpen, setAddModelOpen] = useState(false);

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

        <button
          className="bg-primary py-2 px-5 rounded-lg text-black flex items-center me-10 border border-black transition hover:bg-black hover:text-white hover:border-primary"
          onClick={() => {
            setAddModelOpen(true);
          }}
        >
          <MdAddLink className="text-2xl" />
          <p className="ms-2 text-xl font-medium">Add</p>
        </button>
      </div>

      <div
        className="custom-scrollbar overflow-y-auto mt-5"
        style={{ height: "50vh" }}
      >
        <div className="text-white p-2">
          <div className="justify-around">
            {Object.entries(groupedServers).map(
              ([geoLocation, serverList], index) => (
                <div key={geoLocation} className="py-4 flex flex-col">
                  <div className="w-full px-10">
                    <div className="text-xl mb-5 flex items-center justify-between">
                      <ReactCountryFlag countryCode={geoLocation} />
                      <span>{geoLocation} Server</span>
                    </div>
                    {serverList.map((server, index) => (
                      <div key={server._id} className="mb-10">
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
                          <RiMapPinLine className="text-2xl" />
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
                    <div className=" border-b-2 border-red"></div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          onChildAction();
        }}
        id={id}
        _id={_id}
        link={link}
      />

      <AddServerLink
        id={id}
        isOpen={addModelOpen}
        onClose={() => {
          setAddModelOpen(false);
          onChildAction();
        }}
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
