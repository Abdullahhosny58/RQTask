import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "@/Services/api/addProductDataToBackend";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const itemsPerPage = 4;

const useProducts = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, error } = useQuery<TProduct[]>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const currentItems = data
    ? data.slice(startIndex, startIndex + itemsPerPage)
    : [];
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  return {
    data,
    isLoading,
    error,
    pageNumber,
    setPageNumber,
    currentItems,
    totalPages,
  };
};

export default useProducts;
