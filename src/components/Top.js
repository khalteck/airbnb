import React from "react"
import photoGrid from "../images/photo-grid.png";

export default function Top() {
    return (
        <div className="w-full p-[36px]">
            <img alt="" src={photoGrid} className="w-[395px] mx-[auto] mb-[20px]" />
            <div>
                <h1 className="text-[36px] font-[600] mb-[10px]">Online Expenses</h1>
                <p>
                    Join unique interactive activities led by<br/> one-of-a-kind hosts-all without leaving <br/>home.
                </p>
            </div>
        </div>

    )
}