import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import useSWR from "swr";
import commerce from "../lib/commerce";

export default function Cart2() {
  const { data: cart, error } = useSWR("/", () => {
    return commerce.cart.retrieve();
  });

  return (
    <>
      <Navbar />
      <div className=" tablet:flex tablet:justify-around px-6">
        {/* CART CONTENTS */}
        <div className=" tablet:w-[60%] border px-4 mb-4">
          <div>
            <h2 className="font-semibold text-lg py-2 border-b">My Cart</h2>
          </div>
          {/* Check If No Error and No Data */}
          {!cart && !error && <p>Loading ....</p>}

          {/* Check If Data is Received and  Data is Empty*/}
          {cart && cart.line_items.length === 0 && <p>Empty Cart</p>}

          {/* Check If Data Received*/}
          {cart && cart.line_items.length !== 0 && (
            <div>
              {cart.line_items.map((item) => {
                return (
                  <>
                    <div className=" my-4 ">
                     
                        <p className="font-semibold" >{item.name}</p>
                        <p>
                          <span className="">Quantity :</span>
                          {item.quantity}
                        </p>
                        <p>
                          <span className="">Price :</span>
                          {item.price.raw}
                        </p>
<hr />
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
        {/* CART TOTAL */}
        {cart && cart.line_items.length !== 0 && (
           <div className=" tablet:w-[30%] border px-4 ">
           <div>
            <h2 className="font-semibold text-lg py-2 border-b">Cart Amount</h2>
          </div>
               <p>Amount : {cart.subtotal.formatted_with_symbol} </p>
               <p>Delivery Charges : 0</p>
               <p>Total Amount : {cart.subtotal.formatted_with_symbol}</p>
         </div>
        )}
      </div>
        <Link href="/checkout"><a><button className="p-2 bg-blue-600 rounded-md my-3 mx-auto block" >Proceed To Checkout</button></a></Link>

      
    </>
  );
}
