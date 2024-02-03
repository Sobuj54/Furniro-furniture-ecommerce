import { useState } from "react";
import MiniHero from "../../components/MiniHero/MiniHero";
import useProducts from "../../hooks/useProducts";
import Products from "../home/products/Products";
import Badge from "./badge/Badge";
import Filter from "./filter/Filter";
import Spinner from "../../components/spinner/Spinner";

const Shop = () => {
  const [products, isLoading] = useProducts(0);
  const [value, setValue] = useState("default");

  let filteredValue;
  if (value === "default") {
    filteredValue = products;
  } else {
    filteredValue = products.filter((product) => product.product_type == value);
  }

  // multiple props for filter component
  const filterProps = {
    products: filteredValue,
    value: value,
    setValue: setValue,
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <MiniHero title="Shop" subTitle="Home > Shop" />
      {/* sending multiple props at the same time less code */}
      <Filter {...filterProps} />
      <Products products={filteredValue} />
      <Badge />
    </>
  );
};

export default Shop;
