import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (<div className="grid grid-cols-12 mt-10  bg-[rgb(250,250,250)]">

        <div className="col-span-1"></div>

        <main className="col-span-10  mx-2.5 border-t-[0.1rem] border-gray-300">
            <div className="grid grid-cols-12 text-justify gap-7 mt-8 ">
                <div className="col-span-3 ">
                    <img className="w-[70%]" src="media/images/logo.svg" alt="" />
                    <p className="my-5">© 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                    <div className="flex gap-4 text-blue-600 my-5">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} /></div>

                </div>
                <div className="col-span-3 ml-4">
                    <h3 >Company</h3>
                    <ul className=" text-gray-500">
                        <li className="mt-6 ">About</li>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Referral programme</li>
                        <li>Careers</li>
                        <li>Zerodha cares (CSR)</li>
                        <li>Press & media</li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <h3>Support</h3>
                    <ul className=" text-gray-500">
                        <li className="mt-6">About</li>
                        <li>Products</li>

                        <li>Zerodha cares (CSR)</li>
                        <li>Press & media</li>

                    </ul>
                </div>
                <div className="col-span-3">
                    <h3>Account</h3>
                    <ul className=" text-gray-500">
                        <li className="mt-6">Open an account</li>
                        <li>Products</li>
                        <li>Fund transfer</li>
                        <li>60 day challenge</li>
                    </ul>
                </div>

            </div >
            <div className=" text-gray-500 space-y-12 my-10">
                <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                
            </div>
        </main>


        <div className="col-span-1"></div>

    </div>)
}

export default Footer