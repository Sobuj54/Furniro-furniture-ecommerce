import { Link } from "react-router-dom";
import CustomSlider from "../../../components/CustomSlider/CustormSlider";

const Rooms = () => {
  return (
    <section className="flex flex-col px-5 lg:px-0 lg:grid grid-cols-12 gap-10 mx-auto mt-20 max-w-7xl">
      <div className="col-span-5  flex items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="mt-4 font-normal md:font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quod
            ut eveniet ullam maxime facilis!
          </p>
          <Link to="/shop">
            <button className="bg-[#B88E2F] text-white font-bold px-6 py-3 mt-5">
              Explore More
            </button>
          </Link>
        </div>
      </div>
      {/* slider */}
      <div className="col-span-7 py-10">
        <CustomSlider />
      </div>
    </section>
  );
};

export default Rooms;
