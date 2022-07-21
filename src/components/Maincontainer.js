import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skillsets from "./pages/Skillsets";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function Maincontainer() {
  const [currentPage, setCurrentPage] = useState("Aboutme");

  // This method is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Aboutme") {
      return <Aboutme />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skillsets") {
      return <Skillsets />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className="bg-cover text-gray-400 bg-gray-900 body-font">
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </main>
  );
}
