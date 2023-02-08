import Hero from "../views/Hero";
import About from "../views/About";
import Artists from "../views/Artists";
import VisionMission from "../views/VisionMission";
import Gallery from "../views/Gallery";
import Events from "../views/Events";
import GetInTouch from "../views/GetInTouch";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Artists />
      <VisionMission />
      <Gallery />
      <Events />
      <GetInTouch />
    </main>
  );
};

export default IndexPage;
