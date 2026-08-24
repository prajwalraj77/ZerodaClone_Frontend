import React from "react";

function OpenAccount(){
    return(<div className="grid grid-cols-12">

                <div className="col-span-2"></div>

                <main className="col-span-8 ">
                    <div><img src="media/images/homeHero.png" alt="Hero image" /></div>
                    <div className="text-center mt-10">
                        <h1 className="font-medium text-4xl">Open a Zerodha account</h1>
                        <p className=" mt-3 font-normal">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>
                        <button className="bg-blue-500 py-2.5 px-11 rounded-md text-white font-medium mt-6" >Sign up now</button>
                    </div>

                </main>


                <div className="col-span-2"></div>

            </div>)
}

export default OpenAccount