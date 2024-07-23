import { Product } from "@/type/type";
import axios from "axios";

export const fetchAllProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const addProductDataToBackend = async (product: Product) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      product
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
