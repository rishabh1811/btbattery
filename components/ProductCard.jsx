import React from 'react';

export default function ProductCard() {
    return (
    <div className=" card border-2 m-auto">
        <img className="m-auto " src="https://picsum.photos/seed/picsum/200/300" alt />
        <div>
            <h2 className="title">Apple iPhone Battery 6G battery</h2>
            <p className="price"> Price : 599</p>
            <button>Buy</button>
        </div>


        <style jsx>{`
            .card{
                max-width: 50vw;
            }
            

            `}</style>
    </div>
    
    );
}

// todo set max width to 50vw