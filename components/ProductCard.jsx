import React from 'react';
import Link from 'next/link'


export default function ProductCard(props) {
    return (
        
    <div className=" card border-2 pt-8 pr-0 pl-0 pb-4">
        <Link href={`/productpage/${props.id}`}><a>
        <img className="m-auto " src="https://picsum.photos/seed/picsum/200/300"  />
        </a></Link>
        <div className="px-4 mt-6" >

        <Link href={`/productpage/${props.id}`}><a>
            <h2 className="title">{props.title}</h2>
        </a></Link>
        
            <p className="price"> Price : {props.price}</p>
            
            <button className="bg-purple-500 text-white border-2 block m-auto rounded-xl px-11 py-1">Buy</button>
            
            
        </div>










        <style jsx>{`
            .card{
                max-width: 50vw;
            }
            @media (max-width : 630px){
                .card{
                    margin: auto;
                }
            }
            

            `}</style>

            {console.log(props)}
    </div>
    
    );
}

// todo set max width to 50vw