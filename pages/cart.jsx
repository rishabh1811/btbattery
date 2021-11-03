import React from "react";
import Link from "next/link";
import useSWR from "swr";
import commerce from "../lib/commerce";

export default function Cart() {

  const { data: cart, error } = useSWR("/", () => {
    return commerce.cart.retrieve();
  })

// return(<>
// <h1>hello</h1>
// {cart && console.log(cart)}
// </>)




  return (
    <>
      {/* //^ Navbar  */}
      <div className="navbar flex justify-between px-5 py-2 items-baseline ">
        <div className="navbar-brand">
          <Link href="/" passHref>
            <a>
              <h1 className="text-3xl font-semibold ">
                <span className="pr-2">BT</span>Battery
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex gap-3">
          <a>
            {" "}
            <img className="h-6 " src="./images/search.png" />{" "}
          </a>
          <a>
            {" "}
            <img className="h-6 " src="./images/user.png" />{" "}
          </a>
          <Link href="/">
            <a>
              {" "}
              <img className="h-6 " src="./images/shopping-cart.png" />{" "}
            </a>
          </Link>
        </div>
      </div>
      {/* //^ Navbar Ends Here */}



      <h1>Cart </h1>
      {/* Check If No Error and No Data */}
      {!cart && !error && <p>Loading ....</p>}

      {/* Check If Data is Received and  Data is Empty*/}
      {cart && cart.line_items.length === 0 && <p>Empty Cart</p>}

      {/* Check If Data Received*/}
      {cart && cart.line_items.length !== 0 && (
        <div>
          
            {cart.line_items.map((item) => {
              return <div className="border-2 my-4 mx-3">
                  <p>{item.name}</p>
                  <p><span className="font-semibold" >Quantity :</span>{item.quantity}</p>
                  <p><span className="font-semibold" >Price :</span>{item.price.raw}</p>
                </div>
            })}
          
        </div>
      )}
 
      <h1>CART TOTAL : {(cart && cart.line_items.length !== 0) && cart.subtotal.raw }</h1>

      <Link href="/checkout"><a ><button className="px-3 py-2 bg-gray-300 hover:bg-gray-500 rounded-md ">Proceed To checkout</button></a></Link>
    </>
  );
}
