import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
    return (<div className="grid grid-cols-12 my-4 ">
        <div className="col-span-1"></div>

        <div className="col-span-10 ">
            <div className="grid grid-cols-12 gap-6 p-4 items-center">

                {/* Left Column (6 of 12 columns) */}
                <div className="col-span-6 p-8">
                    <h3 className="text-2xl font-medium my-3">Unbeatable pricing</h3>
                    <p className="my-4 text-gray-600">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a className="text-blue-500 inline-flex items-center gap-2" href="/">
                        See Pricing <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                </div>

                {/* Right Column (6 of 12 columns) */}
                <div className="col-span-6 border border-gray-200 grid grid-cols-2 ">
                    {/* Left Box */}
                    <div className="p-8 flex flex-col items-center justify-center text-center border-r border-gray-200">
                        <h3 className="text-4xl text-gray-800 font-normal mb-3">₹0</h3>
                        <p className="text-sm text-gray-600 leading-snug">
                            Free equity delivery and<br />direct mutual funds
                        </p>
                    </div>

                    {/* Right Box */}
                    <div className="p-8 flex flex-col items-center justify-center text-center">
                        <h3 className="text-4xl text-gray-800 font-normal mb-3">₹20</h3>
                        <p className="text-sm text-gray-600 leading-snug">
                            Intraday and F&O
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <div className="col-span-1"></div>
    </div>)
}

export default Pricing