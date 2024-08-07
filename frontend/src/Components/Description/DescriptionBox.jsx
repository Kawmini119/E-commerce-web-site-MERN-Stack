import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descripyion-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description e-commerce websitedesription">
        <p>
          Discover a wide range of high-quality products at unbeatable prices.
          From fashion and electronics to home goods and beauty products, we
          have everything you need in one place. Enjoy a seamless shopping
          experience with our easy-to-navigate website, secure payment options,
          and fast delivery service. Shop with confidence knowing that customer
          satisfaction is our top priority. Happy shopping at SHOPPER.
        </p>
        <p>
          E-commerce websites typically display a diverse array of products,
          featuring detailed descriptions, high-quality images, and customer
          reviews.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
