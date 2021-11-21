import { addDoc } from "firebase/firestore"
import { colRef } from "../../lib/firebase-config"
export default function Handler(req, res) {
    const confirmedOrder = req.body
    addDoc(colRef, {
        order: confirmedOrder,
        email: confirmedOrder.details.email,
    })

    res.status(200).json({ message: "order details sent to firestore" })
}









// import dbConnect from "../../lib/dbConnect";
// import Order from "../../lib/modals/Order"

// export default async function Handler(req, res) {

//     const confirmedOrder = req.body;
//     await dbConnect();

//     const order = new Order({
//         order: confirmedOrder,
//         email: confirmedOrder.details.email,
//     })

//     order.save()

//     res.status(200).json({ message: 'OK BRO !!!' })
// }