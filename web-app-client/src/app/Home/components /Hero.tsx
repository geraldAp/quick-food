import React from "react";
const Hero = () => {
  return (
    <div className="h-[115vh] w-full relative">
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full">
          <img src="/images/heroImage.jpg" className="w-full object-bottom h-full" />
        </div>
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full z-20 ">
          <div className="text-center text-white ">
            <h1 className="capitalize mb-3 leading-tight text-5xl font-bold ">
              Amazing Meals to Sweep You of your feet
              <span className="block text-4xl  text-orange-400">
                they are finger licking good
              </span>
            </h1>
            <p className="w-[50%] mx-auto">
              Explore the blend of culinary mastery and convenience through our
              swift food delivery service. Delight in an array of flavors,
              expertly crafted and promptly brought to your door. Experience the
              opulence of gourmet dining in the comfort of your home, with our
              quick and efficient meal ordering options.
            </p>
          </div>
        </div>
        <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-10" />
      </div>
    </div>
  );
};

export default Hero;
