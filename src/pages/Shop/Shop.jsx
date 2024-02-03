import { useState } from "react";
import MiniHero from "../../components/MiniHero/MiniHero";
import useProducts from "../../hooks/useProducts";
import Products from "../home/products/Products";
import Badge from "./badge/Badge";
import Filter from "./filter/Filter";
import Spinner from "../../components/spinner/Spinner";

const Shop = () => {
  const [products, isLoading] = useProducts();
  const [value, setValue] = useState("default");

  let filteredValue;
  if (value === "default") {
    filteredValue = products;
  } else {
    filteredValue = products.filter((product) => product.product_type == value);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <MiniHero title="Shop" subTitle="Home > Shop" />
      <Filter products={filteredValue} value={value} setValue={setValue} />
      <Products products={filteredValue} />
      <Badge />
    </>
  );
};

export default Shop;
