import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="mx-auto max-w-7xl mt-28">
      <h1 className="text-3xl font-bold text-center md:text-5xl text-slate-900 drop-shadow-xl">
        Our Products
      </h1>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {products.map((product, index) => (
          <Product key={index} product={product}></Product>
        ))}
      </div>
    </section>
  );
};

export default Products;
