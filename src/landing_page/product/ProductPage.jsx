import React from "react";
import Hero from "./Hero"
import Coin from "./Coin"
import ConnectAPI from "./ConnectAPI"
import Console from "./Console"
import Kite from "./Kite"
import Mobile from "./Mobile";
import Universe from "./Universe";


function ProductPage() {
    return (<>
        <Hero />
        <Kite />
        <Console />
        <Coin />
        <ConnectAPI />
        <Mobile />
        <Universe />

    </>

    )
}
export default ProductPage