import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import IdeaAnimation from "../lotties/IdeaAnimation.json";
import RocketAnimation from "../lotties/RocketAnimation.json";

const Banner = () => {
  const [showIdeaAnimation, setShowIdeaAnimation] = useState(true);

  const ideaAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: IdeaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const RocketAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: RocketAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setShowIdeaAnimation((prev) => !prev);
    }, 7000); // Change animation every 5 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="hero flex min-h-screen flex-col items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* {showIdeaAnimation ? (
          <Lottie
            className="w-full max-w-md lg:max-w-lg"
            options={ideaAnimationOptions}
            height="100%"
            width="100%"
          />
        ) : (
          <Lottie
            className="w-full max-w-md lg:max-w-lg"
            options={RocketAnimationOptions}
            height="100%"
            width="100%"
          />
        )} */}

        <Lottie
          className="w-full max-w-md lg:max-w-lg"
          options={ideaAnimationOptions}
          height="100%"
          width="100%"
        />

        <div className="w-1/2 text-center lg:ml-10 lg:text-left">
          <h1 className="text-3xl font-bold lg:text-6xl">
            The Next LaunchPad <br />
            is Coming!
          </h1>
          <p className="py-6 lg:text-justify">
            NSU Startups Next is delighted to host The Next LaunchPad - Flagship
            Incubation 2024. Prepare yourself for a transformative journey as
            part of our Third Cohort! To Pave The Pathway to Your Successful
            Venture....
          </p>
          <a
            href="#apply-now"
            className="btn bg-purple-900 px-10 text-xl text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-purple-800 hover:px-11 hover:shadow-xl lg:text-2xl"
          >
            Apply Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
