import createCartAndAddProduct from "../../lib/createCartAndAddProduct"
import cookie from "cookie"
import updateCart from "../../lib/updateCart"

export default async function findorcreateuser(req, res) {

    const cart = req.cookies.cart
    const productId = req.body.productId

    if (!cart) {

       try {
        const newCart = await createCartAndAddProduct(productId)
        const newCartId = await newCart.id
        res.status(200)
            .setHeader("Set-Cookie", cookie.serialize("cart", newCartId , {
                httpOnly: true,
                path: "/api",
            })).json({ cart: newCartId })


       } catch (error) {
           console.log("error in findandcreateuser part 1");
       }

    } else {
        
       try {
        const data = await updateCart(cart , productId)
        console.log(data);
         res.status(200).json({ message : "cookie updated"})
       } catch (error) {
        console.log("error in findandcreateuser part 2");
        res.status(200)
       }
    }

}

















// import { v4 as uuidv4 } from 'uuid';
// import cookie from "cookie"

// export default async function (req, res) {
//     const user = req.cookies.user

//     if (!user) {

//         const randomUUID = uuidv4() ;
//         res.status(200)
//             .setHeader("Set-Cookie", cookie.serialize("user", randomUUID, {
//                 httpOnly: true,
//                 path: "/api",
//             })).json({ user: randomUUID })


//     } else {
//         res.status(200).json({ user : user})
//     }// !left here

// }