import React from "react";
import Link from "next/link";

export default function ProductCard({id , name , price , permalink , image}) {
  return (
    <div className=" card border-2 pt-8 pr-0 pl-0 pb-4">
      <Link href={`/productpage/${permalink}`}>
        <a>
          <img
            className="m-auto h-[200px]"
            // src="https://picsum.photos/seed/picsum/200/300"
            src={image? image.url : "https://picsum.photos/seed/picsum/200/300"}
          />
        </a>
      </Link>
      <div className="px-4 mt-6">
        <Link href={`/productpage/${permalink}`}>
          <a>
            <h2 className="title">{name}</h2>
          </a>
        </Link>

        <p className="price"> Price : {price.raw}</p>

        <Link href={`/productpage/${permalink}`}>
          <a>
            {" "}
            <button className="bg-purple-500 text-white border-2 block m-auto rounded-xl px-11 py-1">
              Buy
            </button>{" "}
          </a>
        </Link>
      </div>

      <style jsx>{`
        .card {
          max-width: 50vw;
        }
        @media (max-width: 630px) {
          .card {
            margin: auto;
          }
        }
      `}</style>
    </div>
  );
}

// todo set max width to 50vw
