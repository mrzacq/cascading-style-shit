import About from "./components/About";
import Feature from "./components/Feature";
import Header from "./components/Header";
import AboutImage from "./assets/images/about.png";
import AboutImage2 from "./assets/images/download.png";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main">
      <Header />
      <Feature />
      <About
        img={AboutImage}
        title="React, Vue, Angular"
        button="Get Course Now"
        id="about"
      />
      <Presentation />
      <About id="download" img={AboutImage2} title="Take My Seat" button="Download" />
      <Contact />
    </div>
  );
}

export default App;
