import { useState } from 'react';
import { LoadingScreen } from "./componants/LoadingScreen";
import "./index.css";
import Navbar from "./componants/sections/Navbar";
import Home from "./componants/sections/Home";
import Portfolio from "./componants/sections/Portfolio";
import Experience from "./componants/sections/Experiences";
import Contact from "./componants/sections/contact";
import { Analytics } from "@vercel/analytics/react"

function App() {  
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Portfolio />
          <Experience />
          <Contact />
          <Analytics />

        </div>
      )}
    </>
  );
}


export default App; 
