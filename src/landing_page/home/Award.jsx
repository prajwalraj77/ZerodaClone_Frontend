import React from "react";

function Award() {
    return (<div className="grid grid-cols-12 my-10">

        <div className="col-span-1"></div>
        <div className="col-span-10 flex justify-between items-center" >
            <img src="media/images/largestBroker.svg" alt=""></img>
            <div className="p-12 text-justify w-[50%]">
                <h1 className="text-4xl font-medium py-3">Largest stock broker in India</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className="flex justify-between items-center py-6 my-5">
                    <ul className="list-disc list-inside space-y-3">
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-3">
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                </div>
                <img src="media/images/pressLogos.png" alt=""></img>
            </div>
        </div>

        <div className="col-span-1"></div>

    </div>)
}

export default Award