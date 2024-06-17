import React from "react";

export default function CardProduct(props){
    return(

        <section className="w-52 h-80 flex flex-col gap-2 shadow-xl justify-around rounded-3xl bg-[#0e0e0e] p-3">

            
            <section className="h-4/5 overflow-hidden content-center rounded-3xl" >
                <img src={props.imageUrl} alt={props.productName} className="w-full h-full object-cover object-center"/>
            </section>
            <section className="w-full bg-gray-500 rounded-3xl px-5 flex flex-row items-center justify-between ">
                <h1>{props.productName}</h1>
                <h2>{props.price}</h2>
            </section>
            
            
            
            {/* <p className="overflow-hidden">{props.description}</p> */}
        </section>

    )

}