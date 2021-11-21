import dbConnect from "../../lib/dbConnect";
import Order from "../../lib/modals/Order"

export default async function Handler(req, res) {

    const email = req.body.email;
    console.log(email)
    await dbConnect();

    Order.find({ email: email }, function (err, foundItems) {
        //  console.log(foundItems);
        if (!foundItems) {
            res.status(400).json({ message: 'No Order for this email found' })

        } else {
            res.status(200).send(foundItems)

        }
    });

}









