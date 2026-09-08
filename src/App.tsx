import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Leadership from "./components/Leadership";
import Services from "./components/Services";
import ServiceGallery from "./components/ServiceGallery";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Compliance from "./components/Compliance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <WhyChooseUs />
      <Leadership />
      <Services />
      <ServiceGallery />
      <Clients />
      <Testimonials />
      <Compliance />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;
