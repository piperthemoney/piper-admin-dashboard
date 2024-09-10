import { LuTicket } from "react-icons/lu";  
import { IoMdCheckmark } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
import { MdOutlinePending } from "react-icons/md";
import UserRangeChart from "./UserRangeChart";
import getmonitor from "../../api/getmonitor";
import { useEffect, useState } from "react";

function DashBoard() {
    const [monitor,setMonitor] = useState([]);
    const [total,setTotal] = useState(0);
    const [chart,setChart] = useState();
    const getMonitor = async()=>{
        const res = await getmonitor();
        // console.log(res.lifespan);
        setMonitor(res.isActiveStatus);
        setTotal(res.total_code);
        setChart(res.lifespan)
    }

    console.log(monitor.active);
    console.log(total);

    useEffect(()=>{
        getMonitor();
    },[])

  return (
    <div className="px-5 overflow-y-scroll h-screen">
        <p className="text-2xl font-medium">Piper Dashboard</p>
        <div className="flex w-full mt-5 gap-5 flex-wrap">
            <div className="bg-secondary px-10 w-[300px] py-5 rounded">
                <div className="flex mb-3">
                    <LuTicket className="text-2xl"/>
                    <p className="ms-5 font-medium text-xl">Total Codes</p>
                </div>
                <p className="text-2xl">{total}</p>
            </div>

            <div className="bg-secondary px-10 w-[300px] py-5 rounded">
                <div className="flex mb-3">
                    <IoMdCheckmark className="text-2xl"/>
                    <p className="ms-5 font-medium text-xl">Active Codes</p>
                </div>
                <p className="text-2xl">{monitor?.active}</p>
            </div>

            
            <div className="bg-secondary px-10 w-[300px] py-5 rounded">
                <div className="flex mb-3">
                    <MdOutlinePending className="text-2xl"/>
                    <p className="ms-5 font-medium text-xl">Pending Codes</p>
                </div>
                <p className="text-2xl">{monitor?.notActivated}</p>
            </div>
            
        </div>
        <div className="mt-10">
            <UserRangeChart chart={chart} total={total}/>
        </div>
    </div>
  )
}

export default DashBoard