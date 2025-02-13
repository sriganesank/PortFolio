import React, { useState } from "react";
import NavBar from "./Components/NavComponent/NavBar";
import Hero from "./Components/HeroSection/Hero";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import Technologies from "./Components/Tech";
import Projects from "./Components/Project/Projects";
import Footer from "./Components/Footer";
import Welcome from "./Components/WelcomePage";
import SendMessage from "./Components/WhatsApp/WhatsAppDemo";
import Experience from "./Components/Experience";

const App = () => {
  const [showSite, setShowSite] = useState(false);

  const handleTransitionEnd = () => {
    setShowSite(true);
  };

  return (
    <div className="bg-black text-white">
      {!showSite ? (
        <Welcome onTransitionEnd={handleTransitionEnd} />
      ) : (
        <>
          {/* Header Section */}
          <header>
            <NavBar />
          </header>

          {/* Main Content */}
          <main>
            {/* Hero Section */}
            <section className="w-full">
              <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="w-full">
              <About />
            </section>

            {/* Technologies Section */}
            <section id="technologies" className="w-full">
              <Technologies />
            </section>

            <section id="Experience" className="w-full">
              <Experience/>
            </section>

            {/* Projects Section */}
            <section id="projects" className="w-full">
              <Projects />
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full">
              <Contact />
            </section>

            {/* WhatsApp Messaging Section */}
            {/* <section className="w-full">
              <SendMessage />
            </section> */}
          </main>

          {/* Footer Section */}
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
