import React from "react";

function Ticket() {
    return (<div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-8">
            <h1 className="font-medium text-4xl m-8 p-8 text-center">To create a ticket, select a relevant topic</h1>
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <h1 className="font-medium text-2xl mb-4">Account Opening</h1>
                    <ul className=" [&>li]:text-1xl [&>li]:mb-2 [&>li]:text-blue-500">
                        <li>Online Account Opening</li>
                        <li>Offline Account Opening</li>
                        <li>Company, Partnership and HUF Account</li>
                        <li>Opening</li>
                        <li>NRI Account Opening</li>
                        <li>Charges at Zerodha</li>
                        <li>Zerodha IDFC FIRST Bank 3-in-1 Account</li>
                    </ul>
        
                </div>
                <div className="col-span-4">
                    <h1 className="font-medium text-2xl mb-4">Account Opening</h1>
                    <ul className=" [&>li]:text-1xl [&>li]:mb-2  [&>li]:text-blue-500">
                        <li>Online Account Opening</li>
                        <li>Offline Account Opening</li>
                        <li>Company, Partnership and HUF Account</li>
                        <li>Opening</li>
                        <li>NRI Account Opening</li>
                        <li>Charges at Zerodha</li>
                        <li>Zerodha IDFC FIRST Bank 3-in-1 Account</li>
                    </ul>
        
                </div><div className="col-span-4 ">
                    <h1 className="font-medium text-2xl mb-4">Account Opening</h1>
                    <ul className=" [&>li]:text-1xl [&>li]:mb-2  [&>li]:text-blue-500">
                        <li>Online Account Opening</li>
                        <li>Offline Account Opening</li>
                        <li>Company, Partnership and HUF Account</li>
                        <li>Opening</li>
                        <li>NRI Account Opening</li>
                        <li>Charges at Zerodha</li>
                        <li>Zerodha IDFC FIRST Bank 3-in-1 Account</li>
                    </ul>
        
                </div>
            </div>
        </div>
        <div className="col-span-2"></div>

    </div>)
}

export default Ticket