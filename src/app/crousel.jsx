import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Carousel = ({ textItems }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? textItems.length - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === textItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextPage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentPage]);

  return (
    <div className="max-w-screen bg-slate-200 mx-auto my-8 relative overflow-hidden h-[34rem]">
      <div className="flex items-center h-full">
        <div
          className="flex transition-transform ease-in-out duration-500 rounded-xl"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            width: `${textItems.length * 100}%`,
          }}
        >
          {textItems.map((text, index) => (
            <div key={index} className="w-[100vw] flex-shrink-0">
              <p className="text-4xl">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer">
        <button
          onClick={prevPage}
          className="text-black opacity-40 hover:opacity-100 text-xl focus:outline-none"
        >
          <GrFormPrevious size={35} /> {/* Left arrow */}
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
        <button
          onClick={nextPage}
          className="text-black opacity-40 hover:opacity-100 text-xl focus:outline-none"
        >
          <MdOutlineNavigateNext size={35} /> {/* Right arrow */}
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {textItems.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`mx-1 h-2 w-2 rounded-full opacity-25 hover:opacity-80 cursor-pointer ${
              index === currentPage ? "bg-white" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
