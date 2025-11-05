"use client";

import axios from "axios";

interface IProducts {
  image: string;
  title: string;
  id: number;
  price: number;
  category: string;
  description: string;
}

const productService = async (): Promise<IProducts[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await axios.get(`${baseUrl}/products`);
  const data = response.data;
  return data;
};

export default productService;
