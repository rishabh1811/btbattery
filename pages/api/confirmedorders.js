import dbConnect from "../../lib/dbConnect";
import Order from "../../lib/modals/Order"

export default async function Handler(req, res) {

    const confirmedOrder = req.body;
    await dbConnect();

    const order = new Order({
        order: confirmedOrder
    })

    order.save()

    res.status(200).json({ message: 'OK BRO !!!' })
}