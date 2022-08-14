import React from "react";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Card from "./components/Card";

export default function App() {
    return (
       <div className="w-[100vw] md:w-[550px] bg-white rounded-lg relative top-[-7px]">
            <Navbar/>
            <Top/>
            <Card/>
            <small className="absolute left-[45%] bottom-[-25px]"><p>Built by Khalid</p></small>
       </div>
    )
}