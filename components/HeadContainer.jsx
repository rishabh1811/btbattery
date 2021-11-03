import React from 'react';
import Link from 'next/link'


export default function HeadComponent() {
    return (<>
        {/* //& *****  Styles  ******  */ }
        <style jsx>{`

      .navbar h1 span {
        font-family: 'Pattaya', sans-serif;
      }
      .head-container{
        background: rgb(123,45,208);
    background: linear-gradient(180deg, rgba(123,45,208,1) 0%, rgba(172,122,226,1) 100%);
    
      }
    
      
    `}</style>
        
        {/* //& *******  HTML  ****** */}
        <div className="head-container text-white">
            <div className="navbar flex justify-between px-5 py-2 items-baseline ">
                <div className="navbar-brand">
                    <Link href="/" passHref>
                    <a >
                        <h1 className="text-3xl font-semibold "><span className="pr-2" >BT</span>Battery</h1>
                    </a></Link>
                </div>
                <div className="flex gap-3">
                    <a > <img className="h-6 " src="./images/search.png"  /> </a>
                    <a > <img className="h-6 " src="./images/user.png"  /> </a>
                    <Link href="/cart" ><a > <img className="h-6 " src="./images/shopping-cart.png"  /> </a></Link>
                </div>
            </div>
            <div className="flex justify-around items-center px-5 pb-5">

                <div className="text pr-3">
                    <p className="title text-2xl pb-2">Biggest Website for Mobile Phone Batteries</p>
                    <p className="content">All mobile phone premium battery</p>
                </div>
                <div className="image">
                    <img src="https://picsum.photos/seed/picsum/200/300"  />
                </div>

            </div>
        </div>
   </> )
}

 
