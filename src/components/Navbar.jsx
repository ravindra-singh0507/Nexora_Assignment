import { NavLink } from "react-router-dom";
import logo from "../pages/image/logo.png";
import { PiShoppingCart } from "react-icons/pi";
import { useContext } from "react";
import { Context } from "./Context";
import "./Spinner.css";

const Navbar = () => {
  const {noOfItems}=useContext(Context)
  return (

    <div className=" bg-slate-900 mb-10">
      <div className="flex justify-between items-center max-w-6xl h-20 mx-auto">
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-14" />
        </NavLink>

        <div className="flex items-center space-x-6 text-white ">
          <NavLink to="/" className="hover:text-green-400 transition-all duration-200">Home</NavLink>
          <NavLink to="/cart" className="">
            <div className="relative">
              <PiShoppingCart className="w-[30px] h-[30px] " />
              <div className="h-[20px] w-[20px] bg-green-600 rounded-full
                               absolute top-[20%] left-[50%] text-center text-sm
                               updown">{noOfItems} </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
