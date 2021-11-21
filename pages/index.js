import { NextSeo } from 'next-seo'
import Head from 'next/head'
import BrandsContainer from '../components/BrandsContainer'
import FeaturesContainer from '../components/FeaturesContainer'
import FooterContainer from '../components/FooterContainer'
import HeadComponent from '../components/HeadContainer'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'

export default function Home() {
  return (<>
    {/* seo */}
    <NextSeo
      title="Mi Oppo Vivo Apple Samsung & more Batteries | BT Batteries"
      description="Premium Li-Polymer mobile Batteries. iPhone Mi Xiaomi Huawei Asus and more Batteries"
      // canonical="https://www.canonical.ie/"
      openGraph={{
        //url: 'https://www.url.ie/a',
        title: `Mi Oppo Vivo Apple Samsung & more Batteries | BT Batteries`,
        description: `Premium Li-Polymer mobile batteries. Original mAh cell. 6 months warranty`,
        images: [
          { url: "https://picsum.photos/id/0/300/300" },
          // {
          //   url: 'https://www.example.ie/og-image-01.jpg',
          //   width: 800,
          //   height: 600,
          //   alt: 'Og Image Alt',
          //   type: 'image/jpeg',
          // },
          // {
          //   url: 'https://www.example.ie/og-image-02.jpg',
          //   width: 900,
          //   height: 800,
          //   alt: 'Og Image Alt Second',
          //   type: 'image/jpeg',
          // },
          // { url: 'https://www.example.ie/og-image-03.jpg' },
        ],
        site_name: 'BT Battery',
      }}
    // twitter={{
    //   handle: '@handle',
    //   site: '@site',
    //   cardType: 'summary_large_image',
    // }}
    />
    {/* /seo */}


    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <HeadComponent /> */}
    <Navbar />
    <Jumbotron />
    <BrandsContainer />
    <FeaturesContainer />
    <FooterContainer />

  </>)
}
