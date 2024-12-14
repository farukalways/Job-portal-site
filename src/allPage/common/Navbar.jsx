import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../ciontext/AuthContext";

const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext)

  const handleSignOut = ()=> {
    signOutUser()
  }

  const links = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link>lorem 1</Link></li>
    <li><Link>lorem 1</Link></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">JobBox</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-7">

         {
          user ? <>
           <Link
          className="btn bg-blue-600 hover:bg-[#212529] text-white"
          onClick={handleSignOut}
        >
          Log out</Link>
          
          </> : <> 
          
          <Link
          className="underline hover:text-blue-600 font-semibold"
          to={'/register'}
        >
          Register</Link>
        <Link
          className="btn bg-blue-600 hover:bg-[#212529] text-white"
          to={'/signIn'}
        >
          Sign In</Link>
          </>
         }

        
      </div>
    </div>
  );
};

export default Navbar;