import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#050816]">
        
        <div className="w-[100%] h-[100%] bg-hero-pattern md:h-[70cap]   landscapeL:h-[100vh] min-[720px]:h-[600px]   z-20 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <StarsCanvas /> */}
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
