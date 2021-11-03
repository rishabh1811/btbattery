import Cookies from "js-cookie"

export default async function (req, res) {
   const productsInCart = req.cookies.productsInCart
  
   if(!productsInCart){
        red.status(401).end()   
    return
   } else {

       res.status(200).json({ productsInCart : productsInCart})
   }

 
    

}