import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/Advertisement";
import FeaturesSection from "./Pages/FeatureSection";
import MusicShowcase from "./Pages/MusicShowcase";
import CreatorShowcase from "./Pages/Review";

function App() {
  return (
    <div
      className="bg-[#101012] scrollbar-hide relative flex h-full flex-col overflow-x-hidden overflow-y-scroll scroll-smooth"
      style={{ scrollbarWidth: "none", scrollbarGutter: "inherit" }}
    >
      <div className="absolute inset-0 z-0 h-screen w-full">
        <img
          class="absolute inset-0 h-full w-full object-cover bg-no-repeat transition-opacity duration-1500 ease-in-out"
          alt="Suno background aura"
          loading="lazy"
          src="https://cdn-o.suno.com/Aura-1-Hero-Web.jpg"
          style={{ mixBlendMode: "screen", opacity: 1 }}
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-[rgba(16,16,18,0)] via-[rgba(16,16,18,0.5)] to-[#101012]"
          s
        ></div>
      </div>
      <div>
        <Navbar />
        <MainContent />
        <MusicShowcase />
        <FeaturesSection />
        <HeroSection />
        <CreatorShowcase />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
