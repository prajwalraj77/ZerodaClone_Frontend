import React from "react";

function Details() {
    return (<div>
        <div className="grid grid-cols-12 ">
            <div className="col-span-3"></div>
            <div className="col-span-6 p-8 w-3xl m-6 my-11 "><h1 className="text-center font-medium text-3xl ">We pioneered the discount broking model in India
                Now, we are breaking ground with our technology.</h1></div>

            <div className="col-span-3"></div>
        </div>

        <div className="grid grid-cols-12 ">
            <div className="col-span-1 mb-6"></div>
            <div className="col-span-10 flex justify-center items-start gap-11 text-gray-500 border-t border-gray-500 ">

                <div className="w-1/2 p-2 [&>p]:mt-4 [&>p]:text-[1.3rem] m-16">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="w-1/2 p-2 [&>p]:mt-4 [&>p]:text-[1.3rem] m-16">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    </div>)
}

export default Details