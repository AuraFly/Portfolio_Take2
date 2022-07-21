import React from "react";

const myname = "Jordan Covarrubias ";

export default function About() {
  return (
    <section id="aboutme">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {myname}
            <br className="hidden lg:inline-block" />
            <p className="font-light text-xl">Technology Enthusiast</p>
          </h1>
          <p className="mb-8 leading-relaxed">
            Experienced operations leader, previous network engineer, and
            aspiring full-stack developer in Denver, CO. I have a passion for
            all things technology and eagerly learning to be a more effective
            and knowledgable coder, day by day.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 border-4 border-blue-500/50 rounded-3xl">
          <img
            className="object-cover object-center rounded-3xl"
            alt="profilepic"
            src="./profilepic.webp"
          />
        </div>
      </div>
    </section>
  );
}
