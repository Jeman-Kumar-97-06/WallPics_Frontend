import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from '../hooks/useLogout';
import { useWallContext } from "../hooks/useWallContext";
const Navbar = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const {dispatch} = useWallContext();
    const handleLogout = () => {
        logout();
    }
    return (
        <nav class="flex items-center justify-between px-6 py-3 bg-blue-900 text-white">
        
        <div class="text-xl font-bold">Wallpicks</div>
      
        
        {/* <div class="flex-1 mx-4 max-w-lg">
        <input 
            type="text" 
            placeholder="Search..." 
            class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />    
        </div> */}
      
        <div class="flex items-center space-x-4">
          {
            !user && (<>
                <Link to='/login'><button class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg">Login</button></Link>
                <Link to='/signup'><button class="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg">Signup</button></Link>
            </>)
          }

          {
            user && (<>
                <span>{user.name}</span>
                <button onClick={handleLogout} class="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg">Logout</button>
            </>)
          }
          
        </div>
      </nav>
    );
};

export default Navbar;