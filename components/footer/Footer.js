import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Flex, Box, Text, Link as ChakraLink, Stack } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex flexDirection="column" bg="#F5F5F5">
      <Flex px={{ base: "16px", lg: "128px" }}>Top Part</Flex>
      <Stack textAlign="center">
        <Text
          as="span"
          bg="#000000"
          color="#FFFFFF"
          px={{ base: "16px", lg: "128px" }}
        >
          Copyright © 2023, Development Analytics BD | All rights reserved |
          Powered by
          <ChakraLink
            isExternal
            href="https://thinkcrypt.io/"
            border="1px solid red"
          >
            <Text as="span" color="#EF419B">
              thinkcrypt.io
            </Text>
          </ChakraLink>
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
