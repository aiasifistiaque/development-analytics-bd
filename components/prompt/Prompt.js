import React from "react";
import { Box, Button, Flex, Text, Center } from "@chakra-ui/react";
const Prompt = () => {
  return (
    <Flex mx={{ base: "16px", lg: "128px" }}>
      <Center my="200px" flexDir="column" gap="25px" maxW="1080px" mx="auto">
        <Text fontSize="21px">WHAT WE DO</Text>
        <Text
          fontWeight="900"
          fontSize="24px"
          lineHeight="1.2"
          textAlign="center"
        >
          We are a private consultancy firm in Bangladesh that provides services
          to health, population, nutrition, agriculture, environment, social
          communication, livestock, socio-economic development, and women and
          children’ development research.
        </Text>
        <Button borderRadius="0" color="white" bg="black" h="55px" w="272px">
          Learn More about us
        </Button>
      </Center>
    </Flex>
  );
};

export default Prompt;
