import Head from 'next/head'
import BrandsContainer from '../components/BrandsContainer'
import FeaturesContainer from '../components/FeaturesContainer'
import FooterContainer from '../components/FooterContainer'
import HeadComponent from '../components/HeadContainer'

export default function Home() {
  return (<>

    <Head>
      <title>BT Battery </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HeadComponent />
    <BrandsContainer />
    <FeaturesContainer />
    <FooterContainer />






  </>)
}
