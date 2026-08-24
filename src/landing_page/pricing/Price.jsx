import React from "react";

function Price() {
    return (<div className="grid grid-cols-12">

        <div className=" col-span-1"></div>
        <div className=" col-span-10 flex justify-center items-center text-center gap-5">
            <div className="flex-1">
                <img src="media/images/pricingEquity.svg" alt=""></img>
                <h1 className="font-medium text-2xl my-2.5">Free equity delivery</h1>
                <p className="text-gray-500">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="flex-1 ">
                <img src="media/images/intradayTrades.svg" alt=""></img>
                <h1 className="font-medium text-2xl my-2.5">Intraday and F&O trades</h1>
                <p className="text-gray-500">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
            </div>
            <div className="flex-1">
                <img src="media/images/pricingEquity.svg" alt=""></img>
                <h1 className="font-medium text-2xl my-2.5">Free direct MF</h1>
                <p className="text-gray-500">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
        <div className=" col-span-1"></div>

    </div>)
}

export default Price