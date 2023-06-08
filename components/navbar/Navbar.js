import React from "react";
import Link from "next/link";
import { Box, Flex, Hide, Text, Button, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      h="64px"
      justify="center"
      align="center"
      gap="48px"
      bg="black"
      color="white"
      px={{ base: 4, lg: 32 }}
    >
      <Flex flex={1} gap={2} align="center">
        <Image src="./assets/logo.png" alt="logo" />
        <Text fontWeight="700" fontSize="18px">
          <Link href="/">Digital Analytics Bangladesh</Link>
        </Text>
      </Flex>

      <Hide flex={1} justify="space-around" below="lg">
        <Box>
          <Link href="/about">About Us</Link>
        </Box>
        <Box>
          <Link href="/services">Services</Link>
        </Box>
        {/* <Box>
          <Link href="/team">Team</Link>
        </Box> */}
        <Link href="/contact">
          <Button borderRadius="0">Contact</Button>
        </Link>
      </Hide>
    </Flex>
  );
};

export default Navbar;
