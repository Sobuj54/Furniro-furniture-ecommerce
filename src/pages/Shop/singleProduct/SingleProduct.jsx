import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./productDetails/ProductDetails";
import MiniNav from "../../../components/miniNav/MiniNav";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";

const SingleProduct = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <section>
      <MiniNav name={product.product_name} />
      {product && <ProductDetails product={product} />}
      {product && <AdditionalInfo product={product} />}
    </section>
  );
};

export default SingleProduct;
