import React from "react";

function Console(){
   return (<div className="grid grid-cols-12 my-12">
        <div className="col-span-1"></div>

        <div className="col-span-10 p-5">
            <div className="grid grid-cols-12 gap-6 p-4">
                <div className="col-span-6 p-8" >
                    <h1 className="text-3xl font-medium my-12">Console</h1>
                    <p className="my-4 text-gray-600">The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                    <p className="text-blue-500">Learn more</p>
                </div>
                <div className="col-span-6 my-12 p-8 ml-14 w-3xl">
                    <img className="-m-36" src="media/images/console.png" alt="" />
                    </div>
            </div>
        </div>
        <div className="col-span-1"></div>
    </div>)
}
export default Console