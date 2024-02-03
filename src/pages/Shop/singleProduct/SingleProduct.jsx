import { useParams } from "react-router-dom";
import ProductDetails from "./productDetails/ProductDetails";
import MiniNav from "../../../components/miniNav/MiniNav";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../components/spinner/Spinner";

const SingleProduct = () => {
  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     });
  // }, []);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${id}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p className="text-red-500 text-xl text-center my-20">
        Something went wrong
      </p>
    );
  }

  return (
    <section>
      <MiniNav name={product.product_name} />
      <ProductDetails product={product} />
      <div className="w-full h-[1px] bg-black/50 mb-14" />
      <AdditionalInfo product={product} />
    </section>
  );
};

export default SingleProduct;
