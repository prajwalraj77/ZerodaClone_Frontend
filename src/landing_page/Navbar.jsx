import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (<div className="grid grid-cols-12 border-b-[0.1rem] border-gray-300 p-2 sticky top-0 w-full bg-white shadow-md z-50">
        <div className="col-span-1"></div>
        <div className="col-span-10">
            <div className="grid grid-cols-12">
                <div className="col-span-2 flex justify-evenly items-center ">
                   <Link to="/"><img className="w-[70%]" src="media/images/logo.svg" alt="" /></Link> 
                </div>
                <div className="col-span-5"></div>
                <div className="col-span-5 ">
                    <ul className="flex justify-evenly items-center p-3 gap-7">
                        <Link to="/signup">Signup</Link>
                        <Link to="/about">About</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/support">Support</Link>


                        <Link className=" bg-blue-600 px-5 p-2  text-white rounded-sm" to="/dashbord">Dashbord</Link>

                    </ul>
                </div>
            </div>
        </div>
        <div className="col-span-1"></div>

    </div>)
}

export default Navbar