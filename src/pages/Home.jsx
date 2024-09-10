import GenerateCode from "./../components/GenerateCode";
import Sidebar from "./../components/Sidebar";
import {  Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
// import OffCanvasSidebar from "./../components/offcanavs";
import MarchentDetail from "./../components/MarchentDetail";
import AccList from "../components/AccList";
import DashBoard from "../components/dashboard/DashBoard";

function Home() {
  return (
          <div className="flex">
            <Sidebar />
            <SnackbarProvider maxSnack={3}>
              <div className="flex-1 p-4">
                <Routes>
                  <Route path="/" element={<DashBoard />} />
                  <Route path="/acc" element={<AccList />} />
                  <Route path="/code" element={<GenerateCode />} />
                  {/* <Route path="/accs" element={<OffCanvasSidebar />} /> */}
                  <Route path="/merchant-detail/:id" element={<MarchentDetail />} />
                </Routes>
              </div>
            </SnackbarProvider>
          </div>
  )
}

export default Home