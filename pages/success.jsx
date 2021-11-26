import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function Success() {
  

    return (
        <>
            <Navbar />
            <img className="mx-auto my-4 w-28" src="/images/checked.webp" alt="checked icon" />
            <p className="text-center text-lg" >Order Successfully Placed</p>
            <a href="/profile"><button className="block mx-auto bg-green-400 py-2 px-3 my-4 rounded-md shadow-sm hover:bg-green-500 text-lg" >Go To Orders</button></a>
        </>
    )
}
