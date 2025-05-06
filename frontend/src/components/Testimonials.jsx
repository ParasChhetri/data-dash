import { useMemo, useState } from "react";
import { descriptions, images } from "../data";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const generateRandomRotations = (length) =>
  Array.from({ length }, () => Math.floor(Math.random() * 41) - 20);

export const Testimonials = () => {
  const [indexNum, setIndexNum] = useState(0);
  const randomRotations = useMemo(
    () => generateRandomRotations(images.length),
    []
  );

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col bg-blue-50/25">
      <h1 className="text-2xl font-medium text-[#0D1B2A] md:text-4xl md:font-semibold lg:text-6xl lg:font-extrabold mb-8">
        What they say about us
      </h1>
      {/* Container */}
      <div className="relative p-8 rounded-lg shadow-lg">
        {/* Slider */}
        <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col">
          {/* Images */}
          <div className="sm:h-[300px] sm:w-[300px] h-[200px] w-[200px] relative">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Testimonial"
                className={`h-full w-full absolute top-0 left-0 object-cover rounded-3xl transition-all duration-500 
                ${index === indexNum ? "activeImage" : "inactiveImage"}`}
                style={{transform : `rotate(${indexNum === index ? 0 : randomRotations[index]}deg)`}}
              />
            ))}
          </div>

          {/* Description & Name */}
          <div className="relative sm:w-[400px] w-[320px] mt-22 lg:mt-5 text-center">
            {descriptions.map((description, index) => (
              <p
                key={index}
                className={`text-center absolute transition-all duration-300 ${index === indexNum ? "activeDesc delay-200" : "inactiveDesc"}`}
              >
                {description}
              </p>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-x-4 mt-5">
          <button
            className="cursor-pointer p-2 rounded-full hover:bg-gray-300"
            onClick={() =>
              setIndexNum((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
          >
            <MdArrowBackIos size={24} />
          </button>
          <button
            className="cursor-pointer p-2 rounded-full hover:bg-gray-300"
            onClick={() =>
              setIndexNum((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }
          >
            <MdArrowForwardIos size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
