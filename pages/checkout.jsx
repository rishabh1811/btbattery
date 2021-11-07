//import { GoogleAuthProvider } from "@firebase/auth";
import { useState } from "react";
import Checkoutform from "../components/CheckoutForm";
import Signinform from "../components/SigninForm";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../lib/firebase-config"
import Checkoutformv2 from "../components/CheckoutFormv2";
import SigninFormv2 from "../components/SigninFormv2";

export default function Checkout() {
 // const provider = new GoogleAuthProvider();
const [ user , setUser] = useState(undefined)
 
onAuthStateChanged(auth , (usr) => {
    setUser(usr)
})



return (
    <>
    {console.log(user)}
    <script async src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className="font-bold text-center text-xl">Checkout Page</h1>
      {/* {(user)? <Checkoutformv2 {...user} /> : <Signinform />} */}
      {/* {(user)? <Checkoutformv2 {...user} /> : <SigninFormv2 />} */}
      {(user === null) ? <SigninFormv2 /> : <Checkoutformv2 {...user} />  }
    </>
  )
}
