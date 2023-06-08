import React from "react";
import { Box, Button, Flex, Text, Center } from "@chakra-ui/react";
const Prompt = () => {
  return (
    <Center
      mx={{ base: "16px", lg: "128px" }}
      my="84px"
      flexDir="column"
      gap="25px"
    >
      <Text fontSize="21px">WHAT WE DO</Text>
      <Text>
        We are a private consultancy firm in Bangladesh that provides services
        to health, population, nutrition, agriculture, environment, social
        communication, livestock, socio-economic development, and women and
        children’ development research.
      </Text>
      <Button borderRadius="0" color="white" bg="black" h="55px" w="272px">
        Learn More about us
      </Button>
    </Center>
  );
};

export default Prompt;
