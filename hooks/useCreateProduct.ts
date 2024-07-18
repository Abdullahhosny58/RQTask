import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Product } from "@/type/type";
import { addProductDataToBackend } from "@/Services/api/addProductDataToBackend";

const useCreateProduct = () => {
  const [products, setProducts] = useState<Product[]>([
    { title: "", price: "", description: "", image: null },
  ]);

  const [savedProducts, setSavedProducts] = useState<Product[]>([]);

  const mutation = useMutation({
    mutationFn: addProductDataToBackend,
  });

  const handleChange = (
    index: number,
    field: keyof Omit<Product, "image">,
    value: string
  ) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value as any;
    setProducts(updatedProducts);
  };

  const handleImageChange = (index: number, file: File | null) => {
    const updatedProducts = [...products];
    updatedProducts[index].image = file;
    setProducts(updatedProducts);
  };

  const addProduct = () => {
    setProducts([
      ...products,
      { title: "", price: "", description: "", image: null },
    ]);
  };

  const { mutate: addProductData } = mutation;

  const handleSave = (index: number) => {
    const product = products[index];
    addProductData(product);
    setSavedProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const clearAllProducts = () => {
    setProducts([{ title: "", price: "", description: "", image: null }]);
    setSavedProducts([]);
  };

  return {
    products,
    savedProducts,
    handleChange,
    handleImageChange,
    addProduct,
    handleSave,
    deleteProduct,
    clearAllProducts,
  };
};

export default useCreateProduct;
