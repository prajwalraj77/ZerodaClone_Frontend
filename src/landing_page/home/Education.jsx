import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Education() {
    return (<div className="grid grid-cols-12">

        <div className="col-span-1"></div>
        <div className="col-span-10 flex justify-between items-center" >
            <img src="media/images/education.svg" alt=""></img>
            <div className="p-12 text-justify w-[50%]">
                <h1 className="text-4xl font-medium py-4">Free and open market education</h1>
                <p className="py-1 my-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a className="text-blue-500 inline-flex items-center gap-2" href="/" >
                    Versity <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
                <p className="py-1 my-3">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a className="text-blue-500 inline-flex items-center gap-2" href="/">
                    TradingQ&A  <FontAwesomeIcon icon={faArrowRightLong} /></a>
            </div>
        </div>

        <div className="col-span-1"></div>

    </div>)
}

export default Education