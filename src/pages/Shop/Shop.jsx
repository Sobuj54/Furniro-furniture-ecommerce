import MiniHero from "../../components/MiniHero/MiniHero";
import useProducts from "../../hooks/useProducts";
import Products from "../home/products/Products";
import Badge from "./badge/Badge";
import Filter from "./filter/Filter";

const Shop = () => {
  const [products] = useProducts();
  return (
    <>
      <MiniHero title="Shop" subTitle="Home > Shop" />
      <Filter />
      <Products products={products} />
      <Badge />
    </>
  );
};

export default Shop;
