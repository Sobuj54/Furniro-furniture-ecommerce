import MiniHero from "../../components/MiniHero/MiniHero";
import Products from "../home/products/Products";
import Badge from "./badge/Badge";

const Shop = () => {
  return (
    <>
      <MiniHero title="Shop" subTitle="Home > Shop" />
      <Products />
      <Badge />
    </>
  );
};

export default Shop;
