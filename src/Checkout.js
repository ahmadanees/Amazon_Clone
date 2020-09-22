import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-intro-liberty-university.jpg?CtdEFBx.0QayZ_iTKGWkiF7J.6kWhtYd&itok=6txkJrn9"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">
            <small> {user ? `Hi, ${user.email}` : "Hello, Guest"}</small>
          </h2>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckoutProduct>
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
