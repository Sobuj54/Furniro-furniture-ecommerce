import { useQuery } from "@tanstack/react-query";

const useProducts = (limit) => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/products?limit=${limit}`).then((res) =>
        res.json()
      ),
  });

  return [products, isLoading];
};

export default useProducts;
