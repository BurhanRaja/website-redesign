import { Button } from "@/components/ui/button";
import React from "react";

const OurStory = () => {
  return (
    <>
      <div className="h-[100vh] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div class="absolute inset-0 z-10 h-full w-full bg-white [background:radial-gradient(170%_190%_at_80%_10%,transparent_40%,#e5540f_100%)] -rotate-[180deg]"></div>
        <div class="absolute inset-0 z-10 h-full w-full bg-white [background:radial-gradient(150%_190%_at_20%_20%,transparent_40%,#a8c82e_100%)] rotate-180"></div>
        <div class="absolute inset-0 z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_50%_10%,transparent_40%,white_100%)]"></div>

        <div className="relative z-20 py-8 text-center flex flex-col justify-center items-center">
          <p
            className="w-[100%] font-bold text-xl sm:text-xl bg-clip-text text-[#a8c82e] mb-3"
            // style={{ lineHeight: "1.2" }}
          >
            We Help Your Business Grow
          </p>
          <p
            className="w-[100%] font-bold text-xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-900 leading-snug"
            style={{ lineHeight: "1.2" }}
          >
            We Help Your Business Grow
          </p>
          <p className="mt-8 w-[60%]">
            We are a web design agency helping businesses of all size get a
            better return from online activities.
          </p>
        </div>
      </div>
      <div className="mt-16 px-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-[rgb(239,246,219)] p-8 flex flex-col justify-center items-center rounded-xl">
            <h2 className="text-[#e5540f] text-7xl font-bold mb-3">500+</h2>
            <p className="text-4xl font-semibold text-gray-700">
              Satisfied Clients
            </p>
          </div>
          <div className="bg-[rgb(239,246,219)] p-8 flex flex-col justify-center items-center rounded-xl">
            <h2 className="text-[#e5540f] text-7xl font-bold mb-3">90%</h2>
            <p className="text-4xl font-semibold text-gray-700">
              Repeat Business
            </p>
          </div>
          <div className="bg-[rgb(239,246,219)] p-8 flex flex-col justify-center items-center rounded-xl">
            <h2 className="text-[#e5540f] text-7xl font-bold mb-3">15+</h2>
            <p className="text-4xl font-semibold text-gray-700">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
