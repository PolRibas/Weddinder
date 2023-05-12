import { Box, Button, Image, VStack, HStack } from "@chakra-ui/react";
import { FC } from "react";

export const WeddingFrame: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <VStack
      p="6"
      boxShadow="2xl"
      borderRadius="lg"
      bgGradient="linear(to-r, pink.200, yellow.200)"
      maxW="sm"
      mx="auto"
      spacing="4"
    >
      <Box
        boxSize="300px"
        borderRadius="lg"
        overflow="hidden"
        borderColor="pink.500"
        borderWidth="0px"
        p="3"
        position="relative"
        bg="white"
      >
        <Image src={imageUrl} alt="Wedding Image" boxSize="100%" objectFit="cover" />
      </Box>
      <HStack spacing="7" className="text-6xl">
        <Button colorScheme="pink" variant="unstyled" rounded="full" size="lg">
        ❌
        </Button>
        <Button colorScheme="red" variant="unstyled" rounded="full" size="lg">
        🍆
        </Button>
        <Button colorScheme="green" variant="unstyled" rounded="full" size="lg">
        😘
        </Button>
        <Button colorScheme="blue" variant="unstyled" rounded="full" size="lg">
        💍
        </Button>
      </HStack>
    </VStack>
  );
};