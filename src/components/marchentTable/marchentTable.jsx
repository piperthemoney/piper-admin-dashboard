import { DataGrid } from "@mui/x-data-grid";
import "./datagrid.css";
import ConvertToMMT from "../ConvertToMMT";
import {
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer className="toolbarContainer">
      {/* <GridToolbarFilterButton /> */}
      {/* <GridToolbarColumnsButton /> */}
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}



const columns = [
  { field: "id", headerName: "No", flex: 0.3, minWidth: 100 },
  { field: "code", headerName: "Codes", flex: 1.7, minWidth: 100 },
  { field: "activationDate", headerName: "Activation Date", flex: 1, minWidth: 100,
     renderCell: (params) => {
        return (
          <div className="flex items-center">
            {params.value ? (
              <ConvertToMMT utc={params.value} />
            ) : (
              <p className="text-red-500">Not Activated</p>
            )}
          </div>
        );
      },
   },
  { field: "isActive", headerName: "Status", flex: 1, minWidth: 100 ,
    renderCell: (params) => {
        if(params.value === true){
        return (
          <div className="flex items-center">
            <p className="text-green-500">Activated</p>
          </div>
        )
      }else if(params.value === false){
        return (
          <div className="flex items-center">
            <p className="text-red-500">Expired</p>
          </div>
        )
      }else{
        return (
          <div className="flex items-center">
            <p className="text-orange-500">Pending</p>
          </div>
        )
      }
      
    }
  },
  // { field: "lastLogin", headerName: "Last Login", flex: 1, minWidth: 100 },
];

export default function MarchentTable({accs}) {

  console.log(accs)
  return (
    <div className="overflow-x-auto bg-secondary p-4  w-full rounded-lg">
    <h2 className="text-2xl font-bold mb-5">Accounts ID Lists</h2>
    <div className="w-full bg-secondary h-screen overflow-y-auto max-h-[300px]">
      <table className="min-w-full gap-2 ">
        <thead className="border-space-y-5 sticky top-0 z-5">
          <tr className="bg-white text-black text-left rounded-lg">
            <th className="py-4 px-4">No</th>
            <th className="py-4 px-4">Accounts Num</th>
            <th className="py-4 px-4">Activation Date</th>
            <th className="py-4 px-4">Status</th>
          </tr>
        </thead>
        <tbody >
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
              <td className="p-4">{item.activationDate ? <ConvertToMMT utc={item.activationDate} /> : <p className="text-gray-500">Not Active</p>}</td>
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
