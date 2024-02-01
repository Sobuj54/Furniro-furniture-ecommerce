import { useState } from "react";
import MiniHero from "../../components/MiniHero/MiniHero";
import useProducts from "../../hooks/useProducts";
import Products from "../home/products/Products";
import Badge from "./badge/Badge";
import Filter from "./filter/Filter";

const Shop = () => {
  const [products] = useProducts();
  const [value, setValue] = useState("Bedroom");
  const filteredValue = products.filter(
    (product) => product.product_type == value
  );
  return (
    <>
      <MiniHero title="Shop" subTitle="Home > Shop" />
      <Filter value={value} setValue={setValue} />
      <Products products={filteredValue} />
      <Badge />
    </>
  );
};

export default Shop;
