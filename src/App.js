import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import PriceCards from "./components/PriceCards";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <PriceCards/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
