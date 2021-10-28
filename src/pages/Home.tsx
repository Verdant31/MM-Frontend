import { FirstSection } from '../components/FirstSection';
import { Footer } from '../components/FooterComponents/Footer';
import { Header } from '../components/Header';
import { Properties } from '../components/Properties';
import { SecondSection } from '../components/SecondSection';

export function Home() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <Properties />
      <Footer />
    </>
  )
}
