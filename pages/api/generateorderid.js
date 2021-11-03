import Razorpay from "razorpay"
export default function handler(req, res) {

 const amount = req.body.amount ;

 if (!amount) {
   res.status(400).json({ message : "BRO!!! invalid request received"})
   return
 }

  const razorpay = new Razorpay({
    key_id: 'rzp_test_IIaRz25RdbNjCa',
    key_secret: '7ll21rNSVG6hJ099DhnzVwTc'
  })

  var options = {
    amount,  
    currency: "INR",
  };
  
  razorpay.orders.create(options, function(err, order) {
    // console.log(order);
    res.status(200).json(order)
  });



}
