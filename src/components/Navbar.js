import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jordan Covarrubias
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            My Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            My Skillsets
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Contact Me
          </a>
        </nav>

        <div class="w-full block flex-grow  lg:flex justify-end lg:items-center lg:w-auto">
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white border-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://www.linkedin.com/in/jcov/">
              <img
                src="./linkedin.webp"
                alt="linkedin"
                className="h-10"
                title="LinkedIn"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white border-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="https://github.com/AuraFly">
              <img
                src="./github.webp"
                alt="github"
                className="h-10"
                title="GitHub"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white border-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
            <a href="mailto:jordanjco@gmail.com">
              <img
                src="./email.webp"
                alt="email"
                className="h-10"
                title="Email"
              />
            </a>
          </div>
          <div class="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-white border-white hover:border-indigo-300 hover:bg-black-500 mt-4 lg:mt-0">
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
