import Navigation_Bar from "../components/navigation_bar";
import About from "./sections/home_sections/about";
import Footer from "./sections/home_sections/footer";
import HeroSection from "./sections/home_sections/herosection";
import Others from "./sections/home_sections/others";
import Videos from "./sections/home_sections/videos";

function Home() {
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

export default Home;
