import { useState } from "react";
import MiniHero from "../../components/MiniHero/MiniHero";
import Products from "../home/products/Products";
import Badge from "./badge/Badge";
import Filter from "./filter/Filter";
import Spinner from "../../components/spinner/Spinner";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const [value, setValue] = useState("default");

  const { data: filteredValue = [], isLoading: isCategoryLoading } = useQuery({
    queryKey: ["category", value],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${value}`).then((res) =>
        res.json()
      ),
  });

  // multiple props for filter component
  const filterProps = {
    products: filteredValue,
    value: value,
    setValue: setValue,
  };

  return (
    <>
      <MiniHero title="Shop" subTitle="Home > Shop" />
      {/* sending multiple props at the same time less code */}
      <Filter {...filterProps} />
      {isCategoryLoading ? <Spinner /> : <Products products={filteredValue} />}

      <Badge />
    </>
  );
};

export default Shop;
