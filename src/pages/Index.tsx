import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SwiftCab - Premium Taxi Booking Service | Book Your Ride Now</title>
        <meta
          name="description"
          content="Book reliable taxi services with SwiftCab. Professional drivers, competitive rates, and 24/7 availability. Airport transfers, city rides, and corporate travel."
        />
        <meta
          name="keywords"
          content="taxi booking, cab service, airport transfer, city ride, corporate travel, premium taxi"
        />
        <link rel="canonical" href="https://swiftcab.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SwiftCab - Premium Taxi Booking Service" />
        <meta
          property="og:description"
          content="Book reliable taxi services with professional drivers. 24/7 availability across the city."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swiftcab.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SwiftCab - Premium Taxi Booking" />
        <meta
          name="twitter:description"
          content="Book reliable taxi services with professional drivers. 24/7 availability."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <BookingSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
