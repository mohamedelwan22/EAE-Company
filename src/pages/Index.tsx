import Navbar from '@/components/eae/Navbar';
import HeroSlider from '@/components/eae/HeroSlider';
import StatsSection from '@/components/eae/StatsSection';
import ProductsSection from '@/components/eae/ProductsSection';
import Partners from '@/components/eae/Partners';
import WhyEAE from '@/components/eae/WhyEAE';
import FeaturedProjects from '@/components/eae/FeaturedProjects';
import WhatsAppCTA from '@/components/eae/WhatsAppCTA';
import Footer from '@/components/eae/Footer';
import FloatingWidgets from '@/components/eae/FloatingWidgets';

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <main>
        <StatsSection />
        <Partners />
        <WhyEAE />
        <ProductsSection />
        <FeaturedProjects />
        <WhatsAppCTA />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
};

export default Index;
