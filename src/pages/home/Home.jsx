import BrowseRange from "./Range/BrowseRange";
import Hero from "./hero/Hero";
import Products from "./products/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrowseRange />
      <Products />
    </div>
  );
};

export default Home;
