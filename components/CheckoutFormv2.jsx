import axios from "axios";
import commerce from "../lib/commerce";
import { payNow } from "../lib/razorpay";

export default function Checkoutformv2({ email }) {
    const submitHandler = async (e) => {
        e.preventDefault();
        const name = e.currentTarget.name.value;
        const email = e.currentTarget.email.value;
        const phone = e.currentTarget.phone.value;
        const address = e.currentTarget.address.value;
        const addressLine1 = e.currentTarget.addressLine1.value;
        const city = e.currentTarget.city.value;
        const state = e.currentTarget.state.value;
        const country = e.currentTarget.country.value;
    
        const cart = await commerce.cart.retrieve();
        const amount = (await cart.subtotal.raw) * 100;
        console.log(cart);
        console.log(amount);
    
        const checkoutForm = {
          name,
          email,
          phone,
          address,
          addressLine1,
          city,
          state,
          country,
          cart,
        };
    
        try {
          const { data: orderInfo } = await axios.post("/api/generateorderid", {
            amount,
          });
          const { id: orderId } = await orderInfo;
    
        //   console.log(orderInfo);
        //   console.log(orderId);
    
           payNow(amount, orderId ,checkoutForm);
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <>
<h1>CheckoutForm</h1>
      <p>{email}</p>


      <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-auto mt-4">
        <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Enter Shipping Details
        </div>

        <div class="p-6 mt-8">

          <form onSubmit={submitHandler}>
            <div class="flex flex-col gap-4 mb-2">
              <div>
                <label>Name</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div>
                <label>Address Line 1</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="addressLine1"
                  placeholder="Add line 1"
                />
              </div>
              <div>
                <label>City</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="city"
                  placeholder="City"
                />
              </div>
              <div>
                <label>State</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="state"
                  placeholder="State"
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required="true"
                  type="text"
                  name="country"
                  value="India"
                />
              </div>
            </div>

            <div class="flex w-full my-4">
              <button
                type="submit"
                class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Proceed To Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
