import React from "react"
import Box from "./Box";
import data from "../data";


export default function Card() {
    return (
        <div className="pl-[36px] pb-[30px] w-[100vw] md:w-[550px] flex flex-nowrap gap-[20px] overflow-x-auto relative">
            {data.map((item) => {
                return (
                    <div className="w-[176px]">
                        <Box 
                            key={item.id}
                            item={item}
                            /*img={item.coverImg}
                            rating={item.stats.rating}
                            reviewCount={item.stats.reviewCount}
                            country={item.location}
                            title={item.title}
                            price={item.price}
                            openSpots={item.openSpots}*/
                        />
                    </div>
                )
            })}
            <p className=" absolute bottom-0 font-bold text-[10px]">Swipe left to view more..</p>
        </div>
    )
}
/*
<Box className="w-[176px] relative"
                img={swimmer}
                rating="5.0"
                reviewCount="6"
                country="USA"
                title="Life lessons with Katie Zaferes"
                price="$136"
            >
                <div className="absolute top-[5px] left-[5px] text-[10px] bg-white px-1 py-[2px] rounded-sm">SOLD OUT</div>
            </Box>
            <Box className="w-[176px] relative"
                img={wedding}
                rating="5.0"
                reviewCount="30"
                country="Nigeria"
                title="Learn wedding photography"
                price="$125"
            >
                <div className="absolute top-[5px] left-[5px] text-[10px] bg-white px-1 py-[2px] rounded-sm">ONLINE</div>
            </Box>
            <div className="w-[130px] relative">
                <Box 
                    img={bike}
                    rating="5.0"
                    reviewCount="2"
                    country="Kenya"
                    title="Group Mountain Bikin"
                    price="$50"
                ></Box>
            </div>
*/