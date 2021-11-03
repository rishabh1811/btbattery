import React from "react";
import Head from "next/head";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "../lib/firebase-config";

export default function Signinform(props) {

    const googleSigninHandler = async() => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth , provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            
            // console.log("credential");
            // console.log(credential);
            // console.log("token");
            // console.log(token);
            // console.log("user");
            // console.log(user);
           
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

  return (
    <>
      <h1 className="font-semibold text-md">SigninForm</h1>
      {/* <form>
        <input type="text" name="email" id="" placeholder="Email" />
        <input type="text" name="password" id="" />
        <button type="submit">Register</button>
      </form> */}
      <button onClick={googleSigninHandler} className="bg-red-600 text-white p-3 rounded-sm" >SignIn With Google</button>
    </>
  );
}
