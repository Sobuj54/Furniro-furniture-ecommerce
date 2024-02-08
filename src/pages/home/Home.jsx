import Spinner from "../../components/spinner/Spinner";
import useProducts from "../../hooks/useProducts";
import BrowseRange from "./Range/BrowseRange";
import ComplexImages from "./complexImages/ComplexImages";
import Hero from "./hero/Hero";
import Products from "./products/Products";
import Rooms from "./rooms/Rooms";

const Home = () => {
  const [products, isLoading] = useProducts(12);

  return (
    <div>
      <Hero />
      <BrowseRange />
      {isLoading ? (
        <Spinner />
      ) : (
        <Products products={products} title="Our Products" />
      )}
      <div className="bg-[#FCF8F3]">
        <Rooms />
      </div>
      <ComplexImages />
    </div>
  );
};

export default Home;
