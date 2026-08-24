import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"

function States() {
    return (<div className="grid grid-cols-12 my-12">
        <div className="col-span-1"></div>

        <div className="col-span-10 p-5">
            <div className="grid grid-cols-12 gap-6 p-4">
                <div className="col-span-6 p-8" >
                    <h1 className="text-3xl font-medium my-12">Trust with confidence</h1>
                    <h3 className="text-2xl font-medium my-3">Customer-first always</h3>
                    <p className="my-4 text-gray-600">That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h3 className="text-2xl font-medium my-3">No spam or gimmicks</h3>
                    <p className="my-4 text-gray-600">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3 className="text-2xl font-medium my-3">The Zerodha universe</h3>
                    <p className="my-4 text-gray-600">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className="text-2xl font-medium my-3">Do better with money</h3>
                    <p className="my-4 text-gray-600">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-span-6 my-12 p-8">
                    <img src="media/images/ecosystem.png" alt="" />
                    <a className="text-blue-500 inline-flex items-center gap-2" href="/" >
                        Explore our products  <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                    <a className="text-blue-500 inline-flex items-center gap-2 mx-3" href="/" >
                        Try Kite demo  <FontAwesomeIcon icon={faArrowRightLong} />
                    </a></div>
            </div>
        </div>
        <div className="col-span-1"></div>
    </div>)
}

export default States