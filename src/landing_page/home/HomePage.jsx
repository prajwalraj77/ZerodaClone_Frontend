import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Award from "./Award";
import States from "./States";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount"
import Footer from "../Footer";

function HomePage() {
    return (<>
       
        <Hero />
        <Award />
        <States />
        <Pricing />
        <Education />
        <OpenAccount />
        

    </>)
}

export default HomePage