import React from "react";

const Hero = () => {
  return (
    <section id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] h-[102vh] mx-auto text-center px-2 md:px-0 flex flex-col justify-center">
        <p className="text-primary-green font-extrabold p-2 md:text-2xl">
          GROWING WITH ORGANIC STRATEGIES
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow your brand
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-extrabold">
            We achieve your goals with
          </p>
        </div>
        <div className="wrapper mt-10">
          <div className="typing-demo text-primary-green">Social Media / SEO / SEM.</div>
        </div>
        <p className="md:text-3xl text-xl mt-5 font-extrabold text-gray-400">Monitor your data analytics to increase your leads</p>
        <a href="#start" className="bg-primary-green font-extrabold w-[200px] mx-auto py-3 mt-5 rounded text-black">GET STARTED</a>
      </div>
    </section>
  );
};

export default Hero;
