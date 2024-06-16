import React from "react";

const Home = () => {
  return (
    <div className="mx-auto w-auto text-center sm:w-[75vw] sm:text-left md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[47vw]">
      <div className="space-y-8 sm:hidden">
        <h1 className="text-darkpurple text-8xl">M</h1>
        <h1 className="text-white text-4xl">y</h1>
        <h1 className="text-darkyellow text-8xl">S</h1>
        <h1 className="text-white text-4xl">p</h1>
        <h1 className="text-white text-4xl">a</h1>
        <h1 className="text-white text-4xl">c</h1>
        <h1 className="text-white text-4xl">e</h1>
      </div>
      <h1 className="hidden sm:block text-white text-xl font-WhitneyLight mb-8 tracking-wide text-md sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
        Enjoy Your Free Personal Space{" "}
        <span className="text-darkpurple">&</span> More
      </h1>
      <p className="font-WhitneyLight hidden sm:block text-off xl:leading-normal tracking-wide sm:text-xl lg:text-2xl xl:text-2xl">
        In this place you can enjoy your free space along with many of the
        necessary features for your day. You can organize your daily life and
        also your favorite series, movies, or anime. <br /> If you want to
        contribute, you can click on the following{" "}
        <a
          className="font-WhitneyLight text-darkyellow hover:text-darkyellowhover"
          href="https://www.youtube.com/playlist?list=PLMJPaCcJTig8BsVcTSpINZwGg4Hw0-3Vc"
          rel="noreferrer"
          target="_blank"
        >
          link
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
