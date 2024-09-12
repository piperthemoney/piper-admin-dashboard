import GenerateCode from "./../components/marchent/GenerateCode";
import Sidebar from "./../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
// import OffCanvasSidebar from "./../components/offcanavs";
import MarchentDetail from "../components/marchent/MarchentDetail";
import AccList from "../components/marchent/MarchentList";
import DashBoard from "../components/dashboard/DashBoard";
import Server from "./../components/server/Server";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <SnackbarProvider maxSnack={3}>
        <div className="flex-1 py-4">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/acc" element={<AccList />} />
            <Route path="/code" element={<GenerateCode />} />
            <Route path="/merchant-detail/:id" element={<MarchentDetail />} />
            <Route path="/server" element={<Server />} />
          </Routes>
        </div>
      </SnackbarProvider>
    </div>
  );
}

export default Home;
