import { useQuery } from "@tanstack/react-query";
import Product from "../../../home/products/Product";

const SimilarProducts = ({ product }) => {
  const { product_name, product_type } = product;

  const { data: relatedProducts = [], isLoading } = useQuery({
    queryKey: ["related products", product_type],
    queryFn: () =>
      fetch(
        `http://localhost:5000/related?name=${product_name}&category=${product_type}`
      ).then((res) => res.json()),
  });

  console.log(relatedProducts);

  return (
    <section>
      <h2 className="font-semibold text-2xl md:text-4xl text-center">
        Related Products
      </h2>

      <div className="grid grid-cols-1 px-5 lg:px-0 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
        {relatedProducts.map((item) => (
          <Product product={item} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
