import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandsContainer() {
  return (
    <div className="all-brands border-2 pb-28 tablet:pb-40">
      <h1 className="text-center py-7 text-2xl mb-4 ">Search by brand</h1>
      <div className="flex flex-wrap justify-around gap-8 laptop:gap-16 px-5 tablet:px-20 ">
        {/* <Link href="/brands/apple" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/apple.webp"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/motorola.webp"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/huawei.png"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/oppo.webp"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/asus.webp"  /></a></Link>
                <Link href="/brands/samsung" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/samsung.webp"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/lenovo.webp"  /></a></Link>
                <Link href="/" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/vivo.webp"  /></a></Link>
                <Link href="/brands/mi" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/xiaomi.webp"  /></a></Link>
                 */}

        <Link href="/brands/apple">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/apple.webp" />
          </div>
        </Link>

        <Link href="/">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/motorola.webp" />
          </div>
        </Link>

        <Link href="/">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/huawei.png" />
          </div>
        </Link>

        <Link href="/">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/oppo.webp" />
          </div>
        </Link>

        <Link href="/">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/asus.webp" />
          </div>
        </Link>

        <Link href="/brands/samsung">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/samsung.webp" />
          </div>
        </Link>

        <Link href="/">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/lenovo.webp" />
          </div>
        </Link>

        <Link href="/">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/vivo.webp" />
          </div>
        </Link>

        <Link href="/brands/mi">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20">
              <Image layout="responsive" width={64} height={64} src="/images/brands/xiaomi.webp" />
          </div>
        </Link>


        {/* <Link href="/brands/mi" ><a><img className="w-16 h-16 tablet:w-20 tablet:h-20"   src="/images/brands/xiaomi.webp"  /></a></Link>
                <Link href="http://www.google.com"><div className="w-16 h-16 tablet:w-20 tablet:h-20"><Image layout="responsive"  width={64} height={64}    src="/images/brands/apple.webp"  /></div></Link> */}

        {/* <Image layout="responsive" width={64} height={64}    src="/images/brands/motorola.webp"  />
                 <Image layout="responsive" width={64} height={64}    src="/images/brands/huawei.png"  />
                 <Image layout="responsive" width={64} height={64}    src="/images/brands/oppo.webp"  />
                 <Image layout="responsive" width={64} height={64}    src="/images/brands/asus.webp"  />
                <Image layout="responsive" width={64} height={64}    src="/images/brands/samsung.webp"  />
                 <Image layout="responsive" width={64} height={64}    src="/images/brands/lenovo.webp"  />
                 <Image layout="responsive" width={64} height={64}    src="/images/brands/vivo.webp"  />
                 <Image layout="responsive" width={64} height={64}    src="/images/brands/xiaomi.webp"  /> */}

        <button className="more-button w-24 rounded-xl text-lg bg-red-300">
          more...
        </button>
      </div>
    </div>
  );
}
