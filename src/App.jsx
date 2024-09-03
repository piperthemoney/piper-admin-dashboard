import Dashboard from "./components/Dashboard";
import GenerateCode from "./components/GenerateCode";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <SnackbarProvider maxSnack={3}>
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/code" element={<GenerateCode />} />
              </Routes>
            </div>
          </SnackbarProvider>
        </div>
      </Router>
    </>
  );
}
