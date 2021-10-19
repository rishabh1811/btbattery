import axios from "axios"

export  default async function brands(req, res) {
    const response = await axios.get("http://localhost:1337/products")
    const products = await response.data;
    const allBrands =  products.map((product) => {
        return product.brand
    })
   
   
   
   
    res.status(200).send(allBrands)

}