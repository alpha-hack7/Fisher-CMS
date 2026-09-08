import Navigation_Bar from "./../../components/navigation_bar";
import About from "./about";
import "./css/Home.css";
import Footer from "./footer";
import HeroSection from "./herosection";
import Others from "./others";
import Videos from "./videos";

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
