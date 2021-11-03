import commerce from "./commerce"
import axios from "axios";

export function payNow(amount, order_id, checkoutForm) {


    const razorpay = new Razorpay({
        key: 'rzp_test_IIaRz25RdbNjCa',
        amount,
        order_id,
        currency: 'INR',
        name: 'BT Batteries',
        prefill: {
            email: checkoutForm.email,
            contact: checkoutForm.phone,
        },
        modal: {
            ondismiss() {

            },
        },
        handler(response) {
            try {
                axios.post("/api/confirmedorders", {
                    order_id,
                    details: checkoutForm,
                }).then(res => { console.log(res) })


            } catch (error) {

                console.log(error)

            }
            alert("Success !!!")
        }
    });

    // Razorpay is configured, we need to add some error handling for when the payment fails with Razorpay
    razorpay.on('payment.failed', (response) => {
        console.log(response);
        alert(response.error.reason);
    });

    // Show the razorpay window immediately
    razorpay.open();
}