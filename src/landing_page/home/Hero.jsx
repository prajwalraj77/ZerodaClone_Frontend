import React from "react";

function Hero() {
    return (
        <>

            <div className="grid grid-cols-12 mt-8">

                <div className="col-span-2"></div>

                <main className="col-span-8 ">
                    <div><img src="media/images/homeHero.png" alt="Hero image" /></div>
                    <div className="text-center mt-10">
                        <h1 className="font-medium text-4xl">Invest in everything</h1>
                        <p className=" mt-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button className="bg-blue-500 py-2.5 px-11 rounded-md text-white font-medium mt-6" >Signup now</button>
                    </div>

                </main>


                <div className="col-span-2"></div>

            </div>
        </>
    )
}

export default Hero

{/*  */ }