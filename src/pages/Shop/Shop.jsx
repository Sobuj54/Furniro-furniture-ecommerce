import MiniHero from "../../components/MiniHero/MiniHero";
import Products from "../home/products/Products";
import Badge from "./badge/Badge";
import Filter from "./filter/Filter";

const Shop = () => {
  return (
    <>
      <MiniHero title="Shop" subTitle="Home > Shop" />
      <Filter />
      <Products />
      <Badge />
    </>
  );
};

export default Shop;
