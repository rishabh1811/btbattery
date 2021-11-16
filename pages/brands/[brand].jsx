import axios from "axios";
import FooterContainer from "../../components/FooterContainer";
import HeadComponent from "../../components/HeadContainer";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import commerce from "../../lib/commerce";

export default function Brands({ products }) {
   console.log(products);
    return (
      <>
        {/* <HeadComponent /> */}
        <Navbar />
       

        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 px-8">
          {products.map((product) => {
            return (
                <ProductCard {...product}/>
            )
          })}
        </div>

        <FooterContainer />
      </>
    );


}
//& *********** getStaticPaths **********
export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  const paths = categories.map((category) => {
    return {
      params: { brand: category.slug },
    };
  });
//   console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

//& *********** getStaticProps **********
export const getStaticProps = async ({ params }) => {


    const categorySlug = params.brand

  const { data: products } = await commerce.products.list({
    category_slug: [categorySlug],
  });
  
  

  return {
    props: {
      products,
    },
  };
};

// export const getStaticProps = async ({ params }) => {
//   const brand = params.brand;

//   const response = await axios.get("http://localhost:1337/products");
//   const data = await response.data;

//   const products = data.filter((item) => item.brand === brand);

//   return {
//     props: {
//       products,
//     },
//   };
// };
