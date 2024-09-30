import "./datagrid.css";
import ConvertToMMT from "../ConvertToMMT";
import excel from "./../../assets/excellogo.png";
import PropTypes from "prop-types";
import "./datagrid.css";
import getexcel from "../../api/exportexcel";
import { useParams } from "react-router-dom";

export default function TicketTable({ accs, name }) {
  TicketTable.propTypes = {
    accs: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        activationDate: PropTypes.string,
        isActive: PropTypes.bool,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
  };
  const { id } = useParams();
  const handleExport = async () => {
    // Implement export functionality here
    console.log("Exporting data...");
    const res = await getexcel(id);
    const blob = new Blob([res], { type: "application/" });
    // Create a link element
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${name}.xlsx`; // Set the name of the downloaded file

    // Append to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };

  // console.log(accs);
  return (
    <div className="overflow-x-auto bg-secondary p-4  w-full rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Accounts ID Lists</h2>
        <div>
          <button
            className="border border-white rounded-lg px-5 py-3 flex items-center hover:bg-black transition duration-300 active:border-primary"
            onClick={handleExport}
          >
            <img src={excel} alt="Excel" className="me-5" />
            <p className="font-medium text-lg">Export With Excel File</p>
          </button>
        </div>
      </div>
      <div className="w-full bg-secondary h-screen overflow-y-auto max-h-[300px]">
        <table className="min-w-full gap-2 ">
          <thead className="border-space-y-5 sticky top-0 z-5">
            <tr className="bg-white text-black text-left rounded-lg">
              <th className="py-4 px-4 font-medium">No</th>
              <th className="py-4 px-4 font-medium">Accounts Num</th>
              <th className="py-4 px-4 font-medium">Activation Date</th>
              <th className="py-4 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary">
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
            </tr>
            {accs.map((item, index) => (
              <tr
                key={index}
                className="bg-secondary font-bold text-white hover:bg-black"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{item.code}</td>
                <td className="p-4">
                  {item.activationDate ? (
                    <ConvertToMMT utc={item.activationDate} />
                  ) : (
                    <p className="text-gray-500">Not Active</p>
                  )}
                </td>
                <td className="p-4">
                  {item.isActive === true ? (
                    <p className="text-active">Activated</p>
                  ) : item.isActive === false ? (
                    <p className="text-expired">Expired</p>
                  ) : (
                    <p className="text-pending">Pending</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
