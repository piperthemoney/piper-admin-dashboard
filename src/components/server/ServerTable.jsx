import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWifi } from "react-icons/fa";

const ServerTable = forwardRef((props, ref) => {
  const { search } = props;
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const getAllServer = async () => {
    const res = await getallserver();
    console.log(res);
    setRows(res.data.reverse());
  };

  useImperativeHandle(ref, () => ({
    invokeChildFunction() {
      console.log("Child function invoked", search);
      handleSearch(search);
    },
  }));

  const handleSearch = (name) => {
    console.log(name);

    if (name) {
      const filteredRows = rows.filter((row) =>
        row.batch.toLowerCase().includes(name.toLowerCase())
      );
      setRows(filteredRows);
    } else {
      getAllServer();
    }
  };

  useEffect(() => {
    getAllServer();
  }, [props]);

  return (
    <div className="overflow-x-auto bg-secondary p-4 rounded-lg">
      <div className="bg-secondary h-1/3 overflow-y-auto max-h-[80vh]">
        <table className="w-full">
          <thead className="border-space-y-5 sticky top-0 z-5">
            <tr className="bg-white text-black text-left rounded-lg">
              <th className="py-4 px-4 font-medium">No</th>
              <th className="py-4 px-4 font-medium">Branch Name</th>
              <th className="py-4 px-4 font-medium">Server Number</th>
              <th className="py-4 px-4 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary">
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
            </tr>
            {rows &&
              rows.length !== 0 &&
              rows.map((item, index) => (
                <tr
                  key={index}
                  className="bg-secondary font-semibold text-white hover:bg-black text-[14px]"
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item.batch}</td>
                  <td className="py-2 px-4">{item.serverData.length}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => {
                        navigate(`/server-detail/${item.id}`);
                      }}
                      className="flex px-4 py-2 text-[14px] gap-4 bg-white text-black py-1 px-3 rounded-lg hover:bg-black hover:text-white hover:border-white border-2"
                    >
                      <FaWifi className="text-2xl" />
                      Manage Server
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

import PropTypes from "prop-types";
import getallserver from "../../api/getallserver";

ServerTable.propTypes = {
  search: PropTypes.string,
};
ServerTable.displayName = "TicketTable";

export default ServerTable;
