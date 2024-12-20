import { Outlet } from "react-router-dom";
import Navbar from "../allPage/common/Navbar";
import Footer from "../allPage/common/Footer";


const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <div className=" w-11/12 mx-auto min-h-[calc(100vh-320px)]">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;