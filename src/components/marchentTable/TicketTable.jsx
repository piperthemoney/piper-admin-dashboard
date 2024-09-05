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
    setRows(res.data.reverse());
  };

  useImperativeHandle(ref, () => ({
    invokeChildFunction() {
      console.log("Child function invoked",search);
      handleSearch(search);
    }
  }));

  const handleSearch = (name) => {
    console.log(name)
    
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
  }, [props]);

  return (
    <div className="overflow-x-auto bg-secondary p-4  w-full rounded-lg">
      <div className="w-full bg-secondary h-screen overflow-y-auto max-h-[430px]">
        <table className="min-w-full gap-2 ">
          <thead className="border-space-y-5 sticky top-0 z-5">
            <tr className="bg-white text-black text-left rounded-lg">
              <th className="py-4 px-4">No</th>
              <th className="py-4 px-4">Merchant Name</th>
              <th className="py-4 px-4">Accounts Num</th>
              <th className="py-4 px-4">Duration</th>
              <th className="py-4 px-4">Purchase Date</th>
              <th className="py-4 px-4">Actions</th>
            </tr>
          </thead>
          <tbody >
            <tr className="bg-secondary">
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>  
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
            </tr>
            {rows && rows.length !==0 && rows.map((item, index) => (
              <tr
                key={index}
                className="bg-secondary text-white hover:bg-black"
              > 
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{item.merchant}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.lifespan}</td>
                <td className="py-2 px-4">{item.purchaseDate}</td>
                <td className="py-2 px-4">
                  <button onClick={()=>{
                    navigate(`/merchant-detail/${item.id}`)
                  }} className="flex px-4 py-2 gap-4 bg-white text-black py-1 px-3 rounded-lg hover:bg-black hover:text-white hover:border-white border-2">
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
