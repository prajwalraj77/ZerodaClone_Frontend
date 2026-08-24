import React from "react";

function Hero(){
   return(<div className="grid grid-cols-12">

                <div className="col-span-1"></div>

                <main className="col-span-10 p-8">
                    <div className="text-center mt-10">
                        <h1 className="font-medium text-5xl">Technology</h1>
                        <p className=" m-3 text-2xl text-gray-500 font-medium">Sleek, modern and intuitive trading platforms </p>
                        <p>Check out our <span className="text-blue-500">investment offerings </span></p>
                    </div>

                </main>


                <div className="col-span-1"></div>

            </div>)
}
export default Hero