import Head from 'next/head'
import FullWidthBanner from '../components/FullWidthBanner'
import BannerSlider from '../components/BannerSlider'
import Slider from '../components/Slider'
import GridRowItems from '../components/GridRowItems'
import MultiRowItems from '../components/MultiRowItems'
import YMABII from '../components/YMABII'
import ServicesSection from '../components/ServicesSection'
import PIPSection from '../components/PIPSection'
import Gallery from '../components/Gallery'
import RelatedSearch from '../components/RelatedSearch'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NAP Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullWidthBanner />
      <Slider />
      <BannerSlider />
      <GridRowItems />
      <MultiRowItems />
      <YMABII />
      <ServicesSection />
      <PIPSection />
      <RelatedSearch />
      {/* <Gallery /> */}
    </div>
  )
}
