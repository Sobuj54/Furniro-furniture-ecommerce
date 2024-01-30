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
          <div>
            <img
              src={slideData[currentSlideIndex].image}
              alt={slideData[currentSlideIndex].title}
              className="h-[582px] object-cover hover:scale-105 transition-all duration-200"
            />
          </div>

          <div>
            <img
              src={slideData[currentSlideIndex + 1].image}
              alt={slideData[currentSlideIndex + 1].title}
              className="h-[480px] object-cover hover:scale-105 transition-all duration-200"
            />

            {/* dot buttons to navigate slide */}
            <div className="flex items-center mt-10 gap-4">
              {slideData.map((data, index) => (
                <button
                  key={data.title}
                  onClick={() => setSlideAndButtonIndex(index)}
                  className={
                    index + 1 == slideLength
                      ? "hidden"
                      : activeButtonIndex == index
                      ? "h-4 rounded-full w-4 border-2 bg-sky-500 border-sky-500"
                      : "h-4 rounded-full w-4 border-gray-600 border-2"
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
