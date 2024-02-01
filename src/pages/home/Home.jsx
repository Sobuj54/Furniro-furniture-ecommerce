import useProducts from "../../hooks/useProducts";
import BrowseRange from "./Range/BrowseRange";
import ComplexImages from "./complexImages/ComplexImages";
import Hero from "./hero/Hero";
import Products from "./products/Products";
import Rooms from "./rooms/Rooms";

const Home = () => {
  const [products] = useProducts();
  console.log(products);

  return (
    <div>
      <Hero />
      <BrowseRange />
      <Products products={products} title="Our Products" />
      <div className="bg-[#FCF8F3]">
        <Rooms />
      </div>
      <ComplexImages />
    </div>
  );
};

export default Home;
