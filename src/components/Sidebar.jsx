import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white w-64">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-xl font-bold">My Sidebar</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <a href="/" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          {/* <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Profile
            </a>
          </li> */}
          {/* <li>
            <a href="/accs" className="block p-2 rounded hover:bg-gray-700">
              Account List
            </a>
          </li> */}
          <li>
            <Link to="/auth/sign-in" onClick={()=>{
              localStorage.removeItem("piper-token");
            }} className="block p-2 rounded hover:bg-gray-700">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
