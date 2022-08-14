import React from "react"
import logo from "../images/airbnb 1.png";

export default function Navbar() {
    return (
        <nav className="w-full h-[70px] shadow-md px-[36px] py-[22px] rounded-t-lg">
            <img alt="" src={logo} className="max-w-[100px]"/>
        </nav>

    )
}