import axios from "axios";
import React from "react";
import commerce from "../lib/commerce";
import { payNow } from "../lib/razorpay";

export default function Checkoutform({ email }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const phone = e.currentTarget.phone.value;
    const address = e.currentTarget.address.value;
    const addressLine1 = e.currentTarget.addressLine1.value;
    const city = e.currentTarget.city.value;
    const state = e.currentTarget.state.value;
    const country = e.currentTarget.country.value;

    const cart = await commerce.cart.retrieve();
    const amount = (await cart.subtotal.raw) * 100;
    console.log(cart);
    console.log(amount);

    const checkoutForm = {
      name,
      email,
      phone,
      address,
      addressLine1,
      city,
      state,
      country,
      cart,
    };

    try {
      const { data: orderInfo } = await axios.post("/api/generateorderid", {
        amount,
      });
      const { id: orderId } = await orderInfo;

    //   console.log(orderInfo);
    //   console.log(orderId);

       payNow(amount, orderId ,checkoutForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>CheckoutForm</h1>
      <p>{email}</p>

      <form onSubmit={submitHandler}>
        <input
          className="block"
          required="true"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="block"
          required="true"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <input
          className="block"
          required="true"
          type="text"
          name="email"
          value={email}
        />
        <input
          className="block"
          required="true"
          type="text"
          name="address"
          placeholder="Address"
        />
        <input
          className="block"
          required="true"
          type="text"
          name="addressLine1"
          placeholder="Add line 1"
        />
        <input
          className="block"
          required="true"
          type="text"
          name="city"
          placeholder="City"
        />
        <input
          className="block"
          required="true"
          type="text"
          name="state"
          placeholder="State"
        />
        <input
          className="block"
          required="true"
          type="text"
          name="country"
          value="India"
        />

        <button type="submit">Pay Now</button>
      </form>
    </>
  );
}
