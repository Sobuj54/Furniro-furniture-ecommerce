const MiniHero = ({ title, subTitle }) => {
  return (
    <section className="relative">
      <img
        src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="couch"
        className="w-full h-[316px] object-cover"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-white/50">
        <div className="text-center">
          <h3 className="text-3xl font-medium md:text-5xl">{title}</h3>
          <p className="pt-3 font-normal md:text-lg">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default MiniHero;
