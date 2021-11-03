//import { GoogleAuthProvider } from "@firebase/auth";
import React, { useState } from "react";
import Checkoutform from "../components/CheckoutForm";
import Signinform from "../components/SigninForm";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../lib/firebase-config"

export default function Checkout() {
 // const provider = new GoogleAuthProvider();
const [ user , setUser] = useState(null)
 
onAuthStateChanged(auth , (usr) => {
    setUser(usr)
})



return (
    <>
    <script async src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className="font-bold text-center text-xl">Checkout Page</h1>
      {(user)? <Checkoutform {...user} /> : <Signinform />}
    </>
  )
}
