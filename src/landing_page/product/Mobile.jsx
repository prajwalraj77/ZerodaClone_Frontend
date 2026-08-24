import React from "react";

function Mobile(){
    return(<div className="grid grid-cols-12 my-10">

        <div className="col-span-1"></div>
        <div className="col-span-10 flex justify-between items-center" >
            <img src="media/images/varsity.png" alt=""></img>
            <div className="p-12 text-justify w-[50%]">
                <h1 className="text-4xl font-medium py-3">Varsity mobile</h1>
                <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                <div className="flex justify-items-start [&>img]:mr-10 items-center py-6 my-5">
                    <img src="media/images/googlePlayBadge.svg" alt="Google Play"></img>
                    <img src="media/images/appstoreBadge.svg" alt="App Store"></img>
                </div>
            </div>
        </div>

        <div className="col-span-1"></div>

    </div>)
}
export default Mobile