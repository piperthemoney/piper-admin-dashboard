const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-800 text-white w-64">
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
          <li>
            <a href="/code" className="block p-2 rounded hover:bg-gray-700">
              Code Generator
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
