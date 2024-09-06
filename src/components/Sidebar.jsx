import { NavLink } from "react-router-dom";
import { LuTicket } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import logo from "./../assets/logo.png"


const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-secondary text-white w-64">
      <div className="flex items-center justify-center py-10">
        <img src={logo} />
        <h1 className="text-xl decoration-wavy font-bold px-5 font-squada text-[48px] tracking-widest">Piper</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <NavLink  
                to="/"  
                className={({ isActive }) =>   
                  `block flex gap-4 p-2 rounded ${isActive ? 'bg-primary text-black font-semibold' : 'hover:bg-gray-700 text-white'}`  
                }  
              >  
              <LuTicket className='text-2xl'/>
                  Account List
            </NavLink>  
          </li>  

          <li>
            <NavLink  
                to="/auth/sign-in"  
                className={({ isActive }) =>   
                  `block flex gap-4 p-4 rounded ${isActive ? 'bg-primary text-black font-semibold' : 'hover:bg-gray-700 text-white'}`  
                }  
                onClick={()=>{
                  localStorage.removeItem("piper-token");
                }}
              >  
              <TbLogout2 className='text-2xl'/>
                 Logout
            </NavLink>  
          </li>   
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
