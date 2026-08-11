import Navigation_Bar from "../sections/components/navigation_bar";
import "../css/App.css";
import About from "../sections/about";
import Footer from "../sections/footer";
import HeroSection from "../sections/herosection";
import Others from "../sections/others";
import Videos from "../sections/videos";

function App() {
  return (
    <div className="App">
      <Navigation_Bar />
      <HeroSection />
      <About />
      <Videos />
      <Others />
      <Footer />
    </div>
  );
}

export default App;
