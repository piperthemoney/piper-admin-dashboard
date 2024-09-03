import { DataGrid } from "@mui/x-data-grid";
import getmarchents from "./../../api/getmarchents";
import { useEffect, useState } from "react";
import "./datagrid.css";

const columns = [
  { field: "id", headerName: "No", flex: 1, minWidth: 100 },
  { field: "merchant", headerName: "Merchant", flex: 1, minWidth: 100 },
  { field: "lifespan", headerName: "Lifespan", flex: 1, minWidth: 100 },
  {
    field: "codes",
    headerName: "No of Codes",
    flex: 1,
    minWidth: 100,
    renderCell: (params) => {
      return <span>{params.row.codes.length}</span>;
    },
  },
  { field: "Action", headerName: "", width: 150 },
];

export default function MarchentTable() {
  const [rows, setRows] = useState([]);
  const getMarchents = async () => {
    const res = await getmarchents();
    console.log(res);
    setRows(res.data);
  };

  useEffect(() => {
    getMarchents();
  }, []);

  return (
    <div className=" h-[450px] w-full">
      <DataGrid
        className="custom-data-grid"
        rows={rows.map((row, index) => ({ ...row, id: index + 1 }))}
        columns={columns}
      />
    </div>
  );
}
