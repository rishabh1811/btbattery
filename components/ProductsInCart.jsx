import Cookies from "js-cookie"

export default  function Productsincart() {
    
       async function getCookieData() {
        var cookie = await Cookies.get("productsInCart")
        var cookieArray = await cookie.split("&")
       console.log(cookieArray); 
        // cookieArray.map((product) => {
        //     return product
        // })
    
       }
       
       return(<>
       {getCookieData().then((data) => {
           return data.map((datanew) => {
               return data
           })
       } ) }
       </>) 
}
