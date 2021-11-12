import { FirstSection } from '../components/Home/FirstSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Properties } from '../components/Home/ImmobilesSuggestion';
import { SecondSection } from '../components/Home/SecondSection';

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
