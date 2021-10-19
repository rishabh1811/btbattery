import axios from "axios"
import FooterContainer from "../../components/FooterContainer"


//& ************ getStaticPaths  ************
export const getStaticPaths = async (ctx) => {
    const response = await axios.get("http://localhost:1337/products") // your fetch function here 
    const data = await response.data;
    

   const definedPaths =  data.map((item) =>{
        return {
            params : {
                product : item.id.toString()
            }
        }
    })

    return {
        paths: definedPaths,
        fallback: "blocking"
    }
}



//& ************ getStaticProps  ************


export async function getStaticProps({params}){
   
    const product = params.product
    const response = await axios.get(`http://localhost:1337/products/${product}`) 
    const data = await response.data;


    return {
        props: {
                product: data
        }
    }
}






//& *********** Main Page ************
export default function Productpage({product}) {


    return (<>


        <div className="head-container">
            <div className="navbar flex justify-between px-5 py-2 items-baseline ">
                <div className="navbar-brand">
                    <a >
                        <h1 className="text-3xl font-semibold "><span className="pr-2" >BT</span>Battery</h1>
                    </a>
                </div>
                <div className="flex gap-3">
                    <a > <img className="h-6 " src="./images/search.png" /> </a>
                    <a > <img className="h-6 " src="./images/user.png" /> </a>
                    <a > <img className="h-6 " src="./images/shopping-cart.png" /> </a>
                </div>
            </div>

            <div className="flex justify-around items-center px-5 pb-5">


                <div className="image">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>

            </div>
        </div>


        <div className="px-12">

            <div className="product-title pt-4 pb-2 text-2xl">
                <p>{product.title}</p>
            </div>
            <div className="product-price py-2">
                <p className="price">Price <span className="text-2xl">Rs {product.price}</span></p>
                <p className="mrp">MRP <span> {product.mrp} </span></p>
            </div>
            <div className="button-container">
                <button className="buy-now mx-auto block px-20 py-3 rounded-lg bg-gray-200 my-5 ">Buy Now</button>
                <button className="add-to-cart block mx-auto px-20 py-3 bg-gray-200 rounded-lg my-5 ">Add To Cart</button>
            </div>
            <div className="warranty py-6 ">
                <p className="title text-xl">6 Months Warranty</p>
                <p className="content text-gray-500">Warranty against any performance issue or manufacturing defects</p>
            </div>
            <div className="need-help py-6">
                <p className="title text-xl">Need Help ?</p>
                <p className="content text-gray-500">Call or Whatsapp on 9999111199</p>
            </div>
            <div className="free-delivery py-6">
                <p className="title text-xl">Free Delivery</p>
                <p className="content text-gray-500">All India Delivery</p>
            </div>



        </div>

        <FooterContainer />

<style jsx>{`

.head-container{
    background: rgb(123, 45, 208);
  background: linear-gradient(
    180deg,
    rgba(123, 45, 208, 0.9612978980654762) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}    
    `} </style>

    </>
    )
}
