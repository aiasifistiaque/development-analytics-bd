import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Flex, Box, Text, Link as ChakraLink, Stack } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex flexDirection="column" bg="#F5F5F5">
      {/* top part footer  */}
      <Flex
        px={{ base: "16px", lg: "128px" }}
        pt={{ base: "32px", lg: "64px" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box border="1px solid red" flex="1">
          <Text fontWeight="700" fontSize="1.5rem" mb="10px">
            VINCENT'S SPHERE
          </Text>
          <Text maxW="213px" mb="10px">
            Flat A5, 4/11 Humayun Road, Mohammadpur, Dhaka 1207
          </Text>
          <Flex mb="10px" align="center" gap="5px">
            <Box fontSize="1.2rem">
              <FaPhoneAlt />
            </Box>
            <Box>0182-8398225</Box>
          </Flex>
          <Flex mb="10px" align="center" gap="5px">
            <Box fontSize="1.2rem">
              <GrMail />
            </Box>
            <Box>info@thinkcrypt.io</Box>
          </Flex>
        </Box>
        <Flex
          flexDir="row"
          border="1px solid blue"
          flex="2"
          justify={{ base: "space-around", lg: "space-evenly" }}
          // gap={{ base: "64px", lg: "128px" }}
        >
          <Box border="1px solid green">
            <Text fontWeight="700" fontSize="1.5rem" mb="10px">
              Navigation
            </Text>
            <Link href="/">
              {" "}
              <Text mb="10px">Home</Text>
            </Link>
            <Link href="/about">
              {" "}
              <Text mb="10px">About</Text>
            </Link>
            <Link href="/login">
              {" "}
              <Text mb="10px">Login</Text>
            </Link>
          </Box>

          <Box border="1px solid yellow">
            <Text fontWeight="700" fontSize="1.5rem" mb="10px">
              Legal
            </Text>
            <Link href="/policy">
              {" "}
              <Text mb="10px">Privacy Policy</Text>
            </Link>
            <Link href="/policy">
              {" "}
              <Text mb="10px">Terms of Service</Text>
            </Link>
            <Link href="/policy">
              {" "}
              <Text mb="10px">Return Policy</Text>
            </Link>
          </Box>
        </Flex>

        <Box border="1px solid brown" flex="1">
          <Text fontWeight="700" fontSize="1.5rem" mb="10px">
            Social
          </Text>
          <Flex mb="10px" fontSize="2rem" gap="5px">
            <Box
              color="#000000"
              height="30px"
              width="30px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ChakraLink isExternal href="https://www.facebook.com/">
                <FaFacebook />
              </ChakraLink>
            </Box>
            <Box
              borderRadius="50%"
              bg="#000000"
              color="#FFFFFF"
              height="30px"
              width="30px"
              fontSize="1.2rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ChakraLink isExternal href="https://www.instagram.com/">
                <FaInstagram />
              </ChakraLink>
            </Box>
          </Flex>
        </Box>
      </Flex>
      {/* bottom part footer */}
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
