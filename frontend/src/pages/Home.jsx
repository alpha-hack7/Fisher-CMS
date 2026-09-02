import "../css/App.css";
import About from "../sections/about";
import Navigation_Bar from "../sections/components/navigation_bar";
import Footer from "../sections/footer";
import HeroSection from "../sections/herosection";
import Others from "../sections/others";
import Videos from "../sections/videos";

function App() {
  return (
    <div className="App">
      <Navigation_Bar />
      <div className="home-sections">
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
