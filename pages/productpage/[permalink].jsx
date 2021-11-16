import Addtocartbutton from "../../components/AddToCartButton";
import FooterContainer from "../../components/FooterContainer";
import commerce from "../../lib/commerce";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useToast } from "@chakra-ui/toast";
import { NextSeo, ProductJsonLd } from "next-seo";




// *********** Main Page ************
export default function Productpage({ product }) {
  const toast = useToast();
  console.log(product)
  // addToCartHandler
  function addToCartHandler() {
    commerce.cart.add(product.id, 1).then((response) => console.log(response));

    toast({
      position: "top",
      isClosable: true,
      title: "Added to cart !",
      status: "success",
    });
  }

  // buyNowHandler
  function buyNowHandler() {
    alert("buy now");
  }

  //* ***** RETURN ******
  return (
    <>
    
      {/* SEO Start */}
      {/* <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      /> */}
        {/* <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
     */}
     <ProductJsonLd 
     productName="this is product name kk"
     />
      {/* SEO Ends */}










      <Navbar />
      <div className="flex justify-around items-center px-5 py-5">
        <div className="image">
          <img
            // src="https://picsum.photos/seed/picsum/200/300" />
            className="max-w-[50vw] max-h-[400px]"
            src={
              product.image
                ? product.image.url
                : "https://picsum.photos/seed/picsum/200/300"
            }
          />
        </div>
      </div>

      <div className="px-12">
        <div className="product-title pt-4 pb-2 text-2xl">
          <p>{product.name}</p>
        </div>
        <div className="product-price py-2">
          <p className="price">
            Price <span className="text-2xl">Rs {product.price.raw}</span>
          </p>
          {/* <p className="mrp">MRP <span> {product.mrp} </span></p> */}
          <p className="mrp">
            MRP <span> 1899 </span>
          </p>
        </div>
        <div className="button-container">
          <button
            onClick={buyNowHandler}
            className="buy-now mx-auto block px-20 py-3 rounded-lg bg-gray-200 my-5 "
          >
            Buy Now
          </button>
          <button
            onClick={addToCartHandler}
            className="add-to-cart block mx-auto px-20 py-3 bg-gray-200 rounded-lg my-5 "
          >
            Add To Cart
          </button>
          {/* <Addtocartbutton productId={product.id} /> */}
        </div>

        <div className="warranty py-6 ">
          <p className="title text-xl">6 Months Warranty</p>
          <p className="content text-gray-500">
            Warranty against any performance issue or manufacturing defects
          </p>
        </div>
        <div className="need-help py-6">
          <p className="title text-xl">Need Help ?</p>
          <p className="content text-gray-500">
            Call or Whatsapp on 9999111199
          </p>
        </div>
        <div className="free-delivery py-6">
          <p className="title text-xl">Free Delivery</p>
          <p className="content text-gray-500">All India Delivery</p>
        </div>
      </div>

      <FooterContainer />

      <style jsx>
        {`
          .head-container {
            background: rgb(123, 45, 208);
            background: linear-gradient(
              180deg,
              rgba(123, 45, 208, 0.9612978980654762) 0%,
              rgba(255, 255, 255, 1) 100%
            );
          }
        `}
      </style>
    </>
  );
}


// ************ getStaticPaths  ************
export const getStaticPaths = async () => {
  // const response = await axios.get("http://localhost:1337/products") // your fetch function here
  // const data = await response.data;
  const { data: products } = await commerce.products.list();

  const definedPaths = products.map((product) => {
    return {
      params: {
        permalink: product.permalink,
      },
    };
  });

  return {
    paths: definedPaths,
    fallback: "blocking",
  };
};


// ************ getStaticProps  ************
export async function getStaticProps({ params }) {
  const permalink = params.permalink;
  // const response = await axios.get(`http://localhost:1337/products/${product}`)
  // const data = await response.data;
  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}