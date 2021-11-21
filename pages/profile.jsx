import { onAuthStateChanged } from "@firebase/auth";
import { getDocs, query, where } from "@firebase/firestore";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SigninFormv2 from "../components/SigninFormv2";
import { auth, colRef } from "../lib/firebase-config";

export default function Profile() {
  const [user, setUser] = useState(undefined);
  const [orders, setOrders] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    setUser(usr);
    //console.log(user)
  });

  useEffect(() => {
    async function getOrdersByEmail() {
      if (user === null || user === undefined) {
        console.log("user is null or undefines");
      } else {
        try {
          const q = query(colRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(q);
          const temp = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setOrders(temp);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getOrdersByEmail();
  }, [user]);

  return (
    <>
      <Navbar />
      {!user && (
        <div>
          <h1 className="text-center my-4">Login to view profile</h1>
          <SigninFormv2 />
        </div>
      )}
      {user && (
        <ul>
          {orders && console.log(orders)}
          {orders &&
            orders.length > 0 &&
            orders.map((order) => (
              <li className="border m-4">
                {/* <p><b>Email : </b>{order.email}</p> */}
                {/* <p>{order.id}</p> */}
                <p>Order Items</p>
                {order.order.details.cart.line_items.map((item) => (
                  <div>
                    <p>
                      <b>Product :</b> {item.product_name}
                    </p>
                    <p>
                      <b>Quantity :</b>
                      {item.quantity}
                    </p>
                    {/* ========= LEFT HERE ========= */}
                  </div>
                ))}
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
