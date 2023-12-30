import React, { useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

const App = () => {
  const [autoplay, setAutoplay] = useState(false);
  const [complete, setComplete] = useState(false);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };
  const countdownTime = () => {
    const newYearTime = new Date("January 1, 2024 00:00:00").getTime();
    const timeNow = new Date().getTime();
    const differentTime = newYearTime - timeNow;
    return differentTime;
  };

  const options = useMemo(
    () => ({
      preset: "fireworks",
      sounds: false,
      autoPlay: autoplay,
      background: "#fff",
    }),
    [autoplay]
  );

  const onCompleted = () => {
    setAutoplay(!autoplay);
    setComplete(!complete);
  };

  const renderer = ({ days, hours, minutes, seconds, onComplete }) => {
    return (
      <div className="countdown h-full items-end text-white flex gap-4 z-50">
        <div className="days w-16 lg:w-20 h-24 lg:h-28 flex flex-col justify-end gap-1">
          <span className="text-white">Days</span>
          <div className="w-16 lg:w-20 h-16 lg:h-20 flex border rounded-md border-white justify-center items-center bg-[rgba(255,255,255,0.1)]">
            <span className="text-white text-4xl">{days}</span>
          </div>
        </div>
        <div className="h-20 w-1  flex justify-center items-center">
          <span className="text-4xl">:</span>
        </div>
        <div className="days w-16 lg:w-20 h-24 lg:h-28 flex flex-col justify-end gap-1">
          <span className="text-white">Hours</span>
          <div className="w-16 lg:w-20 h-16 lg:h-20 flex border rounded-md border-white justify-center items-center bg-[rgba(255,255,255,0.1)]">
            <span className="text-white text-4xl">{hours}</span>
          </div>
        </div>
        <div className="h-20 w-1  flex justify-center items-center">
          <span className="text-4xl">:</span>
        </div>
        <div className="days w-16 lg:w-20 h-24 lg:h-28 flex flex-col justify-end gap-1">
          <span className="text-white">Minutes</span>
          <div className="w-16 lg:w-20 h-16 lg:h-20 flex border rounded-md border-white justify-center items-center bg-[rgba(255,255,255,0.1)]">
            <span className="text-white text-4xl">{minutes}</span>
          </div>
        </div>
        <div className="h-20 w-1  flex justify-center items-center">
          <span className="text-4xl">:</span>
        </div>
        <div className="days w-16 lg:w-20 h-24 lg:h-28 flex flex-col justify-end gap-1">
          <span className="text-white">Seconds</span>
          <div className="w-16 lg:w-20 h-16 lg:h-20 flex border rounded-md border-white justify-center items-center bg-[rgba(255,255,255,0.1)]">
            <span className="text-white text-4xl">{seconds}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="text-center w-full">
      <Particles
        id="tsparticles"
        init={particleInitialization}
        options={options}
      />

      <div className="flex flex-col gap-4 w-full min-h-screen justify-center items-center z-50">
        <span className="text-white text-3xl lg:text-7xl font-semibold z-50">
          {complete ? (
            <Typewriter
              words={[
                "Happy new year",
                "wish you all the best",
                "and God bless you",
              ]}
              cursor
              cursorStyle={"_"}
              loop={false}
            />
          ) : (
            "2024 is coming in"
          )}
        </span>

        <Countdown
          date={Date.now() + countdownTime()}
          renderer={renderer}
          onComplete={() => onCompleted()}
          autoStart={true}
        />
      </div>
    </div>
  );
};

export default App;
