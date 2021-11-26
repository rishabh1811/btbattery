import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import commerce from '../lib/commerce'

export default function Navbar() {
  


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
          <Link href="/profile" ><a aria-label="profile">
            <i className="lni lni-user text-white text-2xl"></i>
          </a></Link>
          <Link href="/cart2">
            <a aria-label="cart">
              <i className="lni lni-cart text-white text-2xl"></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
