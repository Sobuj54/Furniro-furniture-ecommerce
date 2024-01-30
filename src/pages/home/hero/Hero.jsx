import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg"
        alt="furniture"
        className="object-cover w-screen h-screen"
      />
      <div className="absolute top-[50%] translate-y-[-50%] right-[5%] bg-red-100 rounded-md px-5 md:px-10 py-7 md:py-14  font-montserrat w-[50%] md:w-[40%] shadow-md shadow-slate-500">
        <h6 className="text-base font-bold tracking-widest md:text-lg">
          New Arrival
        </h6>
        <h3 className="text-[#B88E2F] text-xl sm:text-3xl md:text-5xl font-extrabold leading-snug">
          Discover Our <br /> New Collection
        </h3>
        <p className="font-semibold w-full md:w-[95%] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          consectetur ipsum corporis, officia ipsa vitae?
        </p>
        <Link to="/shop">
          <button className="bg-[#B88E2F] py-2 md:py-4 px-5 md:px-10 font-bold text-white mt-7">
            Buy Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
