import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

const BrowseRange = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("browseRange.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  return (
    <section className="mx-auto mt-28 max-w-7xl">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-5xl text-slate-900 drop-shadow-xl">
          Browse The Range
        </h2>
        <p className="mt-2 text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, culpa?
        </p>
      </div>
      <Swiper
        watchSlidesProgress={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper">
        {rooms.map((room, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-md ">
              <img
                src={room.imageURL}
                alt={room.title}
                className="h-[450px] w-full object-cover rounded-md"
              />
              <h5 className="mt-3 text-lg font-bold text-center">
                {room.title}
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrowseRange;
