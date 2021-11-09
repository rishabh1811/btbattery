import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";
import commerce from '../lib/commerce'

export default function Navbar() {
  // const [showCart , setShowCart] = useState(false)
  // const [cartItems , setCartItems] = useState(0)
  const { data: cart, error } = useSWR("/", () => {
    return commerce.cart.retrieve();
  });

  // if(cart && cart.total_items !== 0){
  //     setCartItems(cart.total_items)
  //     setShowCart(true)
  // }

  console.log(cart);
  return (
    <>
      <Head>
        <link
          href="https://cdn.lineicons.com/3.0/lineicons.css"
          rel="stylesheet"
        />
      </Head>
      <div className="navbar flex justify-between px-5 py-2 items-baseline bg-[rgb(123,45,208)] shadow-md">
        <div className="navbar-brand">
          <Link href="/" passHref>
            <a>
              <h1 className="text-3xl font-semibold text-white">
                <span className="pr-2">BT</span>Battery
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex gap-3">
          <a>
            <i className="lni lni-user text-white text-2xl"></i>
          </a>
          <Link href="/cart2">
            <a>
              <i className="lni lni-cart text-white text-2xl"></i>
              
              {cart && cart.total_items !== 0 && (

              <span className="bg-pink-800 text-white rounded-full px-1">{cart.total_items}</span>
              )}
              
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
