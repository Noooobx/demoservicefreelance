import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TrustedBy from './sections/TrustedBy';
import Services from './sections/Services';
import IndustryPortfolio from './sections/IndustryPortfolio';
import ClientStories from './sections/ClientStories';
import GoogleReviews from './sections/GoogleReviews';
import About from './sections/About';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-white selection:bg-accent/30 overflow-x-hidden w-full relative">
      <Navbar />
      <main className="w-full relative">
        <Hero />
        <TrustedBy />
        <Services />
        <IndustryPortfolio />
        <ClientStories />
        <GoogleReviews />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top hook or subtle mobile safe padding wrapper if needed */}
      <div className="h-20 lg:hidden pointer-events-none" /> 
    </div>
  );
}

export default App;
