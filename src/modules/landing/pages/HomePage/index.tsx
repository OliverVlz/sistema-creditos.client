import Hero from './components/Hero';
import { CreditSimulation } from './components/CreditSimulation';
import { ClientsSection } from './components/ClientsSection';
import CreditProcess from './components/CreditProcess';
import Cta from './components/Cta';
import Faq from './components/Faq';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CreditSimulation />
      <ClientsSection />
      <CreditProcess />
      <Cta />
      <Faq />
      <ContactSection />
    </>
  );
}

