import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./productDetails/ProductDetails";

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

  return <section>{product && <ProductDetails product={product} />}</section>;
};

export default SingleProduct;
