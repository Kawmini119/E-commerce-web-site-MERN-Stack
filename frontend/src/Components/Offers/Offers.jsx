import React from "react";
import "./Offers.css";
import exclusive_image from '../Assets/exclusive-offer.png'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>SUMMER</h1>
                <h1>SUPER DEALS!</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right"></div>
            <img src={exclusive_image} alt="" />
        </div>
    )
}

export default Offers;
