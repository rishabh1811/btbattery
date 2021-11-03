import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    order : Object,
})

export default mongoose.models.Order || mongoose.model( "Order" , orderSchema)