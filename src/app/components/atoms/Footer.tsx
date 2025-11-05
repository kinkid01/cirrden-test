"use client";

import { Box, Text, HStack, VStack, Divider, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="gray.900"
      color="gray.300"
      py={10}
      px={{ base: 4, md: 10 }}
      mt={20}
      borderTop="1px solid"
      borderColor="gray.700"
    >
      <VStack spacing={6}>
        {/*brand name */}
        <Text fontSize="xl" fontWeight="bold" color="white">
          Four Walls
        </Text>

        {/* Links */}
        <HStack spacing={6} wrap="wrap" justify="center">
          <Link href="#">
            <Text _hover={{ color: "white" }}> Home</Text>
          </Link>
          <Link href="#">
            <Text _hover={{ color: "white" }}> About</Text>
          </Link>
          <Link href="#">
            <Text _hover={{ color: "white" }}> Contact</Text>
          </Link>
          <Link href="#">
            <Text _hover={{ color: "white" }}> Shop</Text>
          </Link>
        </HStack>

        <Divider borderColor="gray.700" />

        {/* Social Icons */}
        <HStack spacing={5}>
          <Link href="https://twitter.com">
            <Icon as={FaTwitter} boxSize={5} _hover={{ color: "blue.400" }} />
          </Link>
          <Link href="https://instagram.com">
            <Icon as={FaInstagram} boxSize={5} _hover={{ color: "pink.400" }} />
          </Link>
          <Link href="https://github.com">
            <Icon as={FaGithub} boxSize={5} _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="https://linkedin.com">
            <Icon as={FaLinkedin} boxSize={5} _hover={{ color: "blue.500" }} />
          </Link>
        </HStack>

        {/* Bottom text */}
        <Text fontSize="sm" color="gray.500" textAlign="center">
          © 2025 Four Walls. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};
export default Footer;
