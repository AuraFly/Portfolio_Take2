import React from "react";
import Navbar from "./components/Navbar";
import Skillsets from "./components/Skillsets";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Aboutme />
      <Projects />
      <Skillsets />
      <Contact />
      <Footer />
    </main>
  );
}
