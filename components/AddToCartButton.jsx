import axios from "axios";

export default function Addtocartbutton({ productId }) {
  async function addToCartHandler() {
   
  }

  return (
    <>
      <button
        onClick={addToCartHandler}
        className="add-to-cart block mx-auto px-20 py-3 bg-gray-200 rounded-lg my-5 "
      >
        Add To Cart
      </button>
    </>
  );
}
