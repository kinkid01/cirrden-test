"use client";
import {
  Box,
  Divider,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProductCard from "./components/molecules/cards/ProductCard";
import useProducts from "./hooks/useProducts";

export default function Home() {
  const {
    products,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
  } = useProducts();

  if (isLoading)
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading products...</Text>
      </Box>
    );

  if (error)
    return (
      <Box>
        <Text color="red.500">{`Something went wrong: ${
          (error as Error).message
        }`}</Text>
      </Box>
    );

  return (
    <Stack spacing={8} px={6} py={10}>
      <Box>
        <Heading mb={4}>Products</Heading>
        <Divider mb={4} />

        {/* Filters */}
        <Stack direction="row" spacing={4} mb={6}>
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            maxW="300px"
          />

          <Select
            placeholder="Filter by category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            maxW="200px"
          >
            <option value="men's clothing">Men clothing</option>
            <option value="women's clothing">Women clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </Select>
        </Stack>
      </Box>

      {/* Products */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SimpleGrid>

      {products.length === 0 && (
        <Text textAlign="center" color="gray.500">
          No products found.
        </Text>
      )}
    </Stack>
  );
}
