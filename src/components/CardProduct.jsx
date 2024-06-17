import React from "react";
import "../styles/card.css"
export default function CardProduct(props){
    return(
        <section className="slider-card-trend">

            <section className="slider-card-image">
                {<img src={props.imageUrl} alt="trending" />}
            </section>

            <section className="slider-card-creator">
                <section className="card-creator-info">
                    <p>{props.productName}</p>
                    <p className='creator-info-value'>
                        {props.price} $
                    </p>
                </section>
            </section>
        </section>
       

    )

}