import BrowseRange from "./Range/BrowseRange";
import Hero from "./hero/Hero";
import Products from "./products/Products";
import Rooms from "./rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrowseRange />
      <Products />
      <div className="bg-[#FCF8F3]">
        <Rooms />
      </div>
    </div>
  );
};

export default Home;
