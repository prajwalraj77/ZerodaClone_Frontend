import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (<div className=" bg-[#387ed1]">
        <div className="grid grid-cols-12  p-8 text-white">
            <div className=" col-span-2"></div>
            <div className=" col-span-8">
                <div className="flex justify-between items-center m-3 p-3 mb-8">
                    <h1 className="font-medium text-[20px] mt-10">Support Portal</h1>
                    <Link className="  px-5 p-2  text-white rounded-sm" to="/dashbord">Track Tickets</Link>
                </div>
                <div className="flex justify-between items-center gap-10">
                    <div className="flex-2">
                        <h1 className="font-medium text-3xl">Search for an answer or browse help topics to create a ticket</h1><br />
                        
                        <a href="">Track account openingTrack segment activationIntraday marginsKite user manual</a>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-medium text-3xl">Featured</h1>
                        <ol>
                            <li>Current Takeovers and Delisting - January 2024</li>
                            <li>Latest Intraday leverages - MIS & CO</li>

                        </ol>
                    </div>
                </div>
            </div>
            <div className=" col-span-2"></div>

        </div>
    </div>)
}

export default Hero