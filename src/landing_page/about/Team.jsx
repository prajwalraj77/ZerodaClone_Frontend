import React from "react";

function Team() {
    return (<div className="gap-11 text-gray-500 border-t border-gray-500">
        <h1 className="font-medium text-5xl text-center text-black p-2.5 mt-6-">People</h1>
    <div className="grid grid-cols-12 ">
        <div className="col-span-1 mb-6"></div>
        <div className="col-span-10 flex justify-center items-start ">

            <div className=" p-2 m-6 flex flex-col justify-center items-center gap-4 ">
                <img className="rounded-full w-79 mb-10" src="media/images/nithinKamath.jpg" alt=""  />
                <p className="text-2xl font-medium">Nithin Kamath</p>
                <p className="font-medium"> Founder, CEO</p>
            </div>
            <div className="w-1/2 p-2 m-6  [&>p]:mt-4 [&>p]:text-[1.3rem] ml-10">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
            </div>
        </div>
        <div className="col-span-1"></div></div>
    </div>)
}

export default Team