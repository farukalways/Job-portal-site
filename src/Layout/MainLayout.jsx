import { Outlet } from "react-router-dom";
import Navbar from "../allPage/common/Navbar";
import Footer from "../allPage/common/Footer";


const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;