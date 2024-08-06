import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./constants/Features";
import HowITWorks from "./components/HowITWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowITWorks />
      <Footer />
    </main>
  );
};

export default App;
