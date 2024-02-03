import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });

  return [products, isLoading];
};

export default useProducts;
