import WallDetail from "../components/WallDetail";
import { useEffect } from "react";
import {useWallContext} from '../hooks/useWallContext';
import {useAuthContext} from '../hooks/useAuthContext';
import Masonry from "react-masonry-css";

const Home = () => {
    const {walls,dispatch} = useWallContext();
    const {user}     = useAuthContext();
    const breakpointColumns = {
      default: 5,
      1100: 4,
      768: 3,
      500: 2
    };
    useEffect(()=>{
        const fetchAllWalls = async () => {
          const resp  = await fetch('https://my-projects-lxja.onrender.com/api/walls/',{headers:{"Authorization":`Bearer ${user.token}`}});
          const walls = await resp.json();
          if (resp.ok)  {
              console.log("jeman")
              console.log(walls)
              dispatch({type:"SETWALLS",payload:walls})
          }
          }
        if (user) {
          fetchAllWalls()
        }
    },[dispatch,user]);

    return (
        <div className='w-screen mt-5 ml-5 flex flex-wrap'>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex"
          columnClassName="masonry-grid_column"
        >
          {walls && walls.map(
            w=>(
              <WallDetail key={w._id} wallpaper={w}/>
            )
          )}
        </Masonry>
        </div>
    )
};

export default Home;