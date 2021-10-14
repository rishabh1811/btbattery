import Link from "next/link"
export default function FooterContainer() {
    return (<>
           
     <footer className="py-10 border-2 ">
         <div className="flex justify-center items-center gap-8">
             <p>Follow Us on  : </p>
             <Link href="/"><a><img className="w-10" src="/images/whatsapp.png" alt="" /></a></Link> 
             <Link href="/"><a><img className="w-10" src="/images/telegram.png" alt="" /></a></Link> 
             
        </div>
        <div className="quick-links flex flex-col pl-10 py-8 tablet:pl-14 laptop:pl-20">
            <h3 className="text-lg pb-3 font-semibold">Quick Links</h3>
            <Link href="/"><a className="" >Apple Battery</a></Link>
            <Link href="/"><a className="" >Samsung Battery</a></Link>
            <Link href="/"><a className="" >Oppo Battery</a></Link>
            <Link href="/"><a className="" >Vivo Battery</a></Link>
            <Link href="/"><a className="" >Asus Battery</a></Link>
            <Link href="/"><a className="" >Show All Brands Battery</a></Link>
        </div>


     </footer>
    </>);
}

