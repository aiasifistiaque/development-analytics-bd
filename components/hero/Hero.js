import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { color } from "framer-motion";

const Hero = () => {
  return (
    <Flex
      px={{ base: "16px", lg: "128px" }}
      gap={{ base: "58px", lg: "30px" }}
      flexDir="column"
      justify="center"
      align={{ base: "center", lg: "flex-start" }}
      backgroundImage="url(/assets/Hero.jpg)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        base: "center",
        lg: "",
      }}
      h="calc(100vh - 66px)"
    >
      <Text
        lineHeight="1.2"
        fontWeight="800"
        fontSize={{ base: 44, lg: 56 }}
        textAlign={{ base: "center", lg: "left" }}
        color="black"
      >
        Digital Analytics Bangladesh
      </Text>
      <Link href="/about">
        <Button
          borderRadius="0"
          bg="black"
          color="white"
          h={{ base: "42px", lg: "55px" }}
          w="173px"
          fontSize={{ base: "16px", lg: "22px" }}
          _hover={{
            color: "black",
            background: "white",
          }}
        >
          Learn More
        </Button>
      </Link>
    </Flex>
  );
};

export default Hero;
