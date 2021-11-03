import cookie from "cookie"
export default function (req, res) {
    res.status(200)
    .setHeader("Set-Cookie" , cookie.serialize("chal" , "bc" , {
        httpOnly : true,
        path : "/api",
    })).json({message : "cookie created"})
}