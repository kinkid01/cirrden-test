import { HStack } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <HStack
      display={"flex"}
      flexDir={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"gray.900"}
      p={5}
      gap={3}
      color={"white"}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Blog</Link>
    </HStack>
  );
};

export default Navbar;
