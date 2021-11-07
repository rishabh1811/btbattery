import React from "react";
import Link from 'next/link'


export default function Navbar() {
  return (
    <>
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
    </>
  );
}
