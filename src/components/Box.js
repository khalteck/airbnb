import React from "react"
import star from "../images/icons8-star-24.png";

export default function Box(props) {
    let badgeText;
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } 
    return (
        <div className="w-[176px] relative">
            {badgeText && <div className="absolute top-[7px] left-[7px] text-[10px] bg-white px-1 py-[2px] rounded-sm">{badgeText}</div>}
            <img alt="" src={props.item.coverImg} className="w-full h-[235px] mb-[8px]"/>
            <div className="flex text-[9px] items-start">
                <img alt="" src={star} className="w-[11px] h-[11px] mr-[3px]"/>
                <p><span className="font-[600]">{props.item.stats.rating}</span> <span className="text-gray-500">({props.item.stats.reviewCount}) - {props.item.location}</span></p>
            </div>
            <p className="text-[12px] my-1">{props.item.title}</p>
            <p className="text-[10px] my-1">From <span className="font-[600]">{props.item.price}</span> / person</p>
        </div>
    )
}