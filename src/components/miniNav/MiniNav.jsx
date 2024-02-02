const MiniNav = ({ name }) => {
  return (
    <section className="bg-orange-100">
      <div className="flex items-center gap-3 md:gap-5  h-[100px] max-w-7xl mx-auto text-base md:text-lg px-5 md:px-10 lg:px-0">
        <p className="text-black/60">Home </p>&gt;
        <p className="text-black/60">Shop </p>&gt;
        <div className="w-[2px] h-10 bg-black/50" />
        <p className="text-black">{name}</p>
      </div>
    </section>
  );
};

export default MiniNav;
