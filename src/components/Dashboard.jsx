import MarchentTable from "./marchentTable/marchentTable";

export default function Dashboard() {
  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <MarchentTable />
    </div>
  );
}
