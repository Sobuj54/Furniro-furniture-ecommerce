const Hero = () => {
  return (
    <section className="relative">
      <img
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="furniture"
        className="h-screen w-screen bg-cover"
      />
      <div className="absolute top-[50%] translate-y-[-50%] right-[5%] bg-red-100 rounded-md px-5 md:px-10 py-7 md:py-14  font-montserrat w-[50%] md:w-[40%]">
        <h6 className="text-base md:text-lg font-bold tracking-widest">
          New Arrival
        </h6>
        <h3 className="text-[#B88E2F] text-xl sm:text-3xl md:text-5xl font-extrabold leading-snug">
          Discover Our <br /> New Collection
        </h3>
        <p className="font-semibold w-full md:w-[95%] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          consectetur ipsum corporis, officia ipsa vitae?
        </p>
        <button className="bg-[#B88E2F] py-2 md:py-4 px-5 md:px-10 font-bold text-white mt-7">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
