import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          <a
            href="#Aboutme"
            onClick={() => handlePageChange("Aboutme")}
            className={
              currentPage === "Aboutme" ? "nav-link active" : "nav-link"
            }
          >
            Jordan Covarrubias
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#Projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            <p className="mr-5 hover:text-white">My Projects</p>
          </a>
          <a
            href="#Skillsets"
            onClick={() => handlePageChange("Skillsets")}
            className={
              currentPage === "Skillsets" ? "nav-link active" : "nav-link"
            }
          >
            <p className="mr-5 hover:text-white">My Skillsets</p>
          </a>
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            <p className="mr-5 hover:text-white">Contact Me</p>
          </a>
        </nav>

        <div class="w-full block flex-grow  lg:flex justify-end lg:items-center lg:w-auto">
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://www.linkedin.com/in/jcov/">
              <img
                src="./linkedin.webp"
                alt="linkedin"
                className="h-10"
                title="LinkedIn"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://github.com/AuraFly">
              <img
                src="./github.webp"
                alt="github"
                className="h-10"
                title="GitHub"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="mailto:AuraFlyDev@gmail.com">
              <img
                src="./email.webp"
                alt="email"
                className="h-10"
                title="Email"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://drive.google.com/file/d/1Q1wwNwJCbJkle2L6GyKnZGr8cA6P3R-t/view?usp=sharing">
              <img
                src="./resume.webp"
                alt="resume"
                className="h-10"
                title="My Resume"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
