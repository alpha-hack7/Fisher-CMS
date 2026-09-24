import Navigation_Bar from "./../../components/navigation_bar";
import About from "./about";
import Footer from "./footer";
import HeroSection from "./herosection";
import Others from "./others";
import Videos from "./videos";

function App() {
  return (
    <div>
      <Navigation_Bar />
      <div className="flex flex-col gap-8 mt-4">
        <Videos />
        <HeroSection />
        <About />
        <Others />
      </div>
      <Footer />
    </div>
  );
}

export default App;
