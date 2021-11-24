// import Addtocartbutton from "../../components/AddToCartButton";
import FooterContainer from "../../components/FooterContainer";
import commerce from "../../lib/commerce";
// import Link from "next/link";
import Navbar from "../../components/Navbar";
// import { useToast } from "@chakra-ui/toast";
import { NextSeo, ProductJsonLd } from "next-seo";




// *********** Main Page ************
export default function Productpage({ product }) {
  // const toast = useToast();
  // console.log(product)
  // addToCartHandler
  function addToCartHandler() {
    commerce.cart.add(product.id, 1).then((response) => console.log(response));

    // toast({
    //   position: "top",
    //   isClosable: true,
    //   title: "Added to cart !",
    //   status: "success",
    // });
  }

  // buyNowHandler
  function buyNowHandler() {
    alert("buy now");
  }

  //* ***** RETURN ******
  return (
    <>

      {/* SEO Start */}
    
        <NextSeo
      title={`${product.name} | BT Batteries`} 
      description={`Premium Li-Polimer ${product.name}. Original mAh cell. 6 months warranty`}  
      // canonical="https://www.canonical.ie/"
      openGraph={{
        //url: 'https://www.url.ie/a',
        title: `${product.name} | BT Batteries`,
        description: `Premium Li-Polimer ${product.name}. Original mAh cell. 6 months warranty`,
        images: [
          { url: product.image.url },
          // {
          //   url: 'https://www.example.ie/og-image-01.jpg',
          //   width: 800,
          //   height: 600,
          //   alt: 'Og Image Alt',
          //   type: 'image/jpeg',
          // },
          // {
          //   url: 'https://www.example.ie/og-image-02.jpg',
          //   width: 900,
          //   height: 800,
          //   alt: 'Og Image Alt Second',
          //   type: 'image/jpeg',
          // },
          // { url: 'https://www.example.ie/og-image-03.jpg' },
        ],
        site_name: 'BT Battery',
      }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}
    />
    
     <ProductJsonLd
      productName= {product.name}
      images={[
        product.image.url ,
        // 'https://example.com/photos/4x3/photo.jpg',
        // 'https://example.com/photos/16x9/photo.jpg',
      ]}
      description={`Premium Li-Polimer ${product.name}. Original mAh cell. 6 months warranty`}
      brand="BT Batteries"
      //color="blue"
      // manufacturerName="Gary Meehan"
      // manufacturerLogo="https://www.example.com/photos/logo.jpg"
      // material="steel"
      slogan="Highest grade battery with 6 Months warranty"
      // disambiguatingDescription="Executive Anvil, perfect for the business traveller."
      // releaseDate="2014-02-05T08:00:00+08:00"
      // productionDate="2015-02-05T08:00:00+08:00"
      // purchaseDate="2015-02-06T08:00:00+08:00"
      // award="Best Executive Anvil Award."
      reviews={[
        {
          author: {
            type: 'Rishabh',
            name: 'Gupta',
          },
          datePublished: '2019-01-06T03:37:40Z',
          reviewBody:
            'This is the best aftermarket product! Thanks for such a great product',
          name: 'So great!!!',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '1',
          },
          publisher: {
            type: 'Organization',
            name: 'TwoVit',
          },
        },
      ]}
      aggregateRating={{
        ratingValue: '4.8',
        reviewCount: '89',
      }}
      offers={[
        {
          price: product.price.raw,
          priceCurrency: 'INR',
          priceValidUntil: '2022-11-05',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          // url: 'https://www.example.com/executive-anvil',
          seller: {
            name: 'BT Battery',
          },
        },
      ]}
      mpn="925872"
    />


      {/* SEO Ends */}









      {console.log(product)}
      <Navbar />
      <div className="flex justify-around items-center px-5 py-5">
        <div className="image">
          <img
            // src="https://picsum.photos/seed/picsum/200/300" />
            className="w-[250px] tablet:w-[300px] laptop:w-[400px] max-h-[400px]"
            src={
              product.image
                ? product.image.url
                : "https://picsum.photos/seed/picsum/200/300"
            }
            alt="product-image"
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