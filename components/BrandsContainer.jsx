import React from 'react';
import Link from 'next/link'


export default function BrandsContainer() {
    return (
        <div className="all-brands border-2 pb-28 tablet:pb-40">
            <h1 className="text-center py-7 text-2xl mb-4 ">Search by brand</h1>
            <div className="flex flex-wrap justify-around gap-8 laptop:gap-16 px-5 tablet:px-20 ">

                
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/apple.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/motorola.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/huawei.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/oppo.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/asus.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/samsung.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/lenovo.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/vivo.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/xiaomi.png"  /></a></Link>


                <button className="more-button w-24 rounded-xl text-lg bg-red-300">more...</button>
            </div>
        </div>

    )
}

 