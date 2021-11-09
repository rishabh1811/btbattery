import Head from 'next/head'
import BrandsContainer from '../components/BrandsContainer'
import FeaturesContainer from '../components/FeaturesContainer'
import FooterContainer from '../components/FooterContainer'
import HeadComponent from '../components/HeadContainer'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'

export default function Home() {
  return (<>

    <Head>
      <title>BT Battery </title>
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
