import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  HStack,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { ICard } from "./interfaces";

const ProductCard = ({ category, image, price, title, description }: ICard) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        maxW="sm"
        borderRadius="xl"
        boxShadow="sm"
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-6px)",
        }}
        transition="all 0.25s ease"
        bg="white"
        height="500px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        overflow="hidden"
        onClick={onOpen}
      >
        <CardBody p={4}>
          {/* Image Section */}
          <Box
            width="100%"
            height="260px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            overflow="hidden"
            mb={4}
            bg="gray.50"
          >
            <Image
              src={image}
              alt={title}
              width={250}
              height={250}
              style={{
                width: "auto",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Product Details */}
          <Stack spacing={3}>
            <Heading size="md">{title}</Heading>

            <Text fontSize="sm" color="gray.500" noOfLines={2}>
              Category: {category}
            </Text>

            <HStack justify="space-between" align="center" mt="auto">
              <Text fontWeight="bold" color="blue.600" fontSize="lg">
                ${price}
              </Text>
              <Text fontSize="sm" color="green.500" fontWeight="medium">
                In Stock
              </Text>
            </HStack>
          </Stack>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {description}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
