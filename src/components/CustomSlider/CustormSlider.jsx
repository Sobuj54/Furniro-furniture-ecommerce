import { useEffect, useState } from "react";

const CustomSlider = () => {
  const [slideData, setSlideData] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setSlideData(data);
        setSlideLength(data.length);
      });
  }, []);

  const setSlideAndButtonIndex = (index) => {
    setCurrentSlideIndex(index);
    setActiveButtonIndex(index);
  };

  return (
    <>
      {slideLength > 0 && (
        <div className="grid grid-cols-2 gap-7">
          <div className="relative">
            <img
              src={slideData[currentSlideIndex].image}
              alt={slideData[currentSlideIndex].title}
              className="h-[400px] md:h-[582px] object-cover hover:scale-105 transition-all duration-200"
            />
            <div className="absolute bottom-[5%] md:bottom-[10%] left-[5%] md:left-[10%] right-[5%] md:right-[10%] bg-white/80 p-3 md:p-7">
              <p className="text-base md:text-lg">
                {slideData[currentSlideIndex].id} ----{"  "}
                {slideData[currentSlideIndex].type}
              </p>
              <h2 className="font-bold text-xl md:text-3xl mt-1">
                {slideData[currentSlideIndex].title}
              </h2>
            </div>
          </div>
          {/* second slide image */}
          <div>
            <img
              src={slideData[currentSlideIndex + 1].image}
              alt={slideData[currentSlideIndex + 1].title}
              className="h-[320px] md:h-[480px] object-cover hover:scale-105 transition-all duration-200"
            />

            {/* dot buttons to navigate slide */}
            <div className="flex items-center mt-5 md:mt-10 gap-2 md:gap-4">
              {slideData.map((data, index) => (
                <button
                  key={data.id}
                  onClick={() => setSlideAndButtonIndex(index)}
                  className={
                    index + 1 == slideLength
                      ? "hidden"
                      : activeButtonIndex == index
                      ? "h-2 md:h-4 rounded-full w-2 md:w-4 border-2 bg-sky-500 border-sky-500"
                      : "h-2 md:h-4 rounded-full w-2 md:w-4 border-gray-600 border-2"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomSlider;
