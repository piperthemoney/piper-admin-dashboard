import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import getmarchents from "../../api/getmarchents";
import { LuTicket } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const TicketTable = forwardRef((props, ref) => {
  const { search } = props;
 const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const getMarchents = async () => {
    const res = await getmarchents();
    setRows(res.data);
  };

  useImperativeHandle(ref, () => ({
    invokeChildFunction() {
      console.log("Child function invoked",search);
      handleSearch(search);
    }
  }));

  const handleSearch = (name) => {
    
   if (name) {
      const filteredRows = rows.filter((row) =>
        row.merchant.toLowerCase().includes(name.toLowerCase())
      );
      setRows(filteredRows);
    } else {
      getMarchents();
    }
  };



  useEffect(() => {
    getMarchents();
  }, []);

  return (
    <div className="overflow-x-auto scrollbar max-h-[450px] w-full rounded-lg">
      <div className="w-full rounded-lg overflow-hidden">
        <table className="min-w-full bg-gray-200 gap-2">
          <thead className="border-space-y-5  ">
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-4 px-4">No</th>
              <th className="py-4 px-4">Merchant Name</th>
              <th className="py-4 px-4">Accounts Num</th>
              <th className="py-4 px-4">Duration</th>
              <th className="py-4 px-4">Purchase Date</th>
              <th className="py-4 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {/* <tr>
              <td className="py-2 px-4 bg-white"></td>
              <td className="py-2 px-4 bg-white"></td>
              <td className="py-2 px-4 bg-white"></td>
              <td className="py-2 px-4 bg-white"></td>
              <td className="py-2 px-4 bg-white"></td>
              <td className="py-2 px-4 bg-white"></td>
            </tr> */}
            {rows.map((item, index) => (
              <tr
                key={index}
                className="bg-blue-100 border-b hover:bg-gray-100"
              >
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{item.merchant}</td>
                <td className="py-2 px-4">{item.codes.length}</td>
                <td className="py-2 px-4">{item.lifespan}</td>
                <td className="py-2 px-4">{}</td>
                <td className="py-2 px-4">
                  <button onClick={()=>{
                    navigate(`/merchant-detail/${index+1}`)
                  }} className="flex px-4 py-2 gap-4 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                    <LuTicket className="text-2xl" />
                    View Tickets
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
TicketTable.displayName = "TicketTable";




export default TicketTable;
