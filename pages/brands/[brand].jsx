import axios from "axios";
import FooterContainer from "../../components/FooterContainer";
import HeadComponent from "../../components/HeadContainer";
import ProductCard from "../../components/ProductCard";

export default function Brands({products}) {
    return (<>
    
        <HeadComponent />
        <div>
            <h1>BrandName</h1>
        </div>

        {/* <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 px-8">
            
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div> */}


        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 px-8">

            {products.map((product) => {
                return <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title} 
                price={product.price} />
            })}
           
        </div>

        <FooterContainer />
   </> )
}
//& *********** getStaticPaths **********
export async function getStaticPaths () {
    const brands = ["apple" , "mi" , "samsung"]

    const myPaths =  brands.map((brand) => {
          return {
              params : {brand : brand}
          }
      })
      

    return {
        paths: myPaths,
        fallback: false
    }
}


//& *********** getStaticProps **********
export const getStaticProps = async ({params}) => {
    const brand = params.brand;
    
    const response = await axios.get("http://localhost:1337/products");
    const data = await response.data;

    const products = data.filter((item) => item.brand === brand)
    



    return {
        props: {
            products,
        }
    }
}