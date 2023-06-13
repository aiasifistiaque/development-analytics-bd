import React, { useRef } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Hide,
  Show,
  Text,
  Button,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

const NavbarExperimental = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex
      h="64px"
      justify="center"
      align="center"
      gap="48px"
      color="black"
      px={{ base: 6, lg: 32 }}
    >
      <Flex flex={1} gap={2} align="center">
        <Image src="./assets/logo.png" alt="logo" />
      </Flex>

      <Hide flex={1} justify="space-around" below="lg">
        <Box>
          <Link href="/">Home</Link>
        </Box>
        <Box>
          <Link href="/about">About Us</Link>
        </Box>
        <Box>
          <Link href="/services">Our Mission</Link>
        </Box>
        <Box>
          <Link href="/about">Our Projects</Link>
        </Box>
        <Link href="/contact">
          <Box>Contact Us</Box>
        </Link>
      </Hide>

      <Show below="lg">
        <Button ref={btnRef} onClick={onOpen} bgColor="transparent">
          <GiHamburgerMenu color="black" size="24px" />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent minW="100vw">
              <DrawerCloseButton />
              <DrawerHeader>
                <Box>
                  <Link href="/">Home</Link>
                </Box>
              </DrawerHeader>
              <DrawerBody>
                <Flex
                  flexDir="column"
                  gap="16px"
                  fontWeight="500"
                  fontSize="20px"
                >
                  <Box>
                    <Link href="/about">About Us</Link>
                  </Box>
                  <Box>
                    <Link href="/services">Our Mission</Link>
                  </Box>
                  <Box>
                    <Link href="/about">Our Projects</Link>
                  </Box>
                  <Link href="/contact">
                    <Box>Contact Us</Box>
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Button>
      </Show>
    </Flex>
  );
};

export default NavbarExperimental;
