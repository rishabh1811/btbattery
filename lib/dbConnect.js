import mongoose from "mongoose";

export default async function dbConnect() {
    const client = await mongoose.connect("mongodb+srv://rishabh1811:Ontoscenerio1@cluster0.sjxhf.mongodb.net/btBatteryDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    })

    return client;
}