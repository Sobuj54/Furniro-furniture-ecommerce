const Hero = () => {
  return (
    <section className="relative">
      <img
        src="https://scontent.fdac37-1.fna.fbcdn.net/v/t1.15752-9/420120250_386456617405987_8705515316424789880_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGcCd1cqXcLZdsOd2M82yOkz-ootbcp2xLP6ii1tynbEjuk8lctVrqCN5WcTB_zXljJBn2qEH39pZ_m-6an-DGg&_nc_ohc=VCqpYtIm-tIAX9D_WJE&_nc_ht=scontent.fdac37-1.fna&oh=03_AdSdNj94Wilk3j9JAMz1GjVW8vBWntnieTYH09fZ73y96A&oe=65DF32C2"
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
        <button className="bg-[#B88E2F] py-2 md:py-4 px-5 md:px-10 font-bold text-white mt-7">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
