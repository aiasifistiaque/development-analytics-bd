import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Flex
      px={{ base: "16px", lg: "128px" }}
      gap={{ base: "58px", lg: "30px" }}
      flexDir="column"
      justify="center"
      align={{ base: "center", lg: "flex-start" }}
      backgroundImage="url(/assets/hero.png)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        base: "center",
        lg: "",
      }}
      h="656px"
    >
      <Text
        lineHeight="1.2"
        fontWeight="800"
        fontSize={{ base: 44, lg: 56 }}
        textAlign={{ base: "center", lg: "left" }}
      >
        Digital Analytics Bangladesh
      </Text>
      <Button
        borderRadius="0"
        bg="black"
        color="white"
        h={{ base: "42px", lg: "55px" }}
        w="173px"
        fontSize={{ base: "16px", lg: "22px" }}
      >
        Learn More
      </Button>
    </Flex>
  );
};

export default Hero;
