//import { GoogleAuthProvider } from "@firebase/auth";
import { useState } from "react";
import Checkoutform from "../components/CheckoutForm";
import Signinform from "../components/SigninForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase-config";
import Checkoutformv2 from "../components/CheckoutFormv2";
import SigninFormv2 from "../components/SigninFormv2";
import Navbar from "../components/Navbar";

export default function Checkout() {
  // const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(undefined);

  onAuthStateChanged(auth, (usr) => {
    setUser(usr);
  });

  return (
    <>
      <script  src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <Navbar />
      <h1 className="font-bold text-center text-xl mt-4">Checkout</h1>
      {user === null ? <SigninFormv2 /> : <Checkoutformv2 {...user} />}
    </>
  );
}
