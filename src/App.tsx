import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Leadership from "./components/Leadership";
import Services from "./components/Services";
import ServiceGallery from "./components/ServiceGallery";
import Clients from "./components/Clients";
import Compliance from "./components/Compliance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Compliance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
