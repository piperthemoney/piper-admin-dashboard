import Dashboard from "./../components/Dashboard";
import GenerateCode from "./../components/GenerateCode";
import Sidebar from "./../components/Sidebar";
import {  Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import OffCanvasSidebar from "./../components/offcanavs";
import MarchentDetail from "./../components/MarchentDetail";

function Home() {
  return (
          <div className="flex">
            <Sidebar />
            <SnackbarProvider maxSnack={3}>
              <div className="flex-1 p-4">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/code" element={<GenerateCode />} />
                  <Route path="/accs" element={<OffCanvasSidebar />} />
                  <Route path="/merchant-detail/:id" element={<MarchentDetail />} />
                </Routes>
              </div>
            </SnackbarProvider>
          </div>
  )
}

export default Home