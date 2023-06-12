import React, { useState, useRef } from "react";
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
import { GrClose } from "react-icons/gr";

const NavbarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
        <Text fontWeight="700" fontSize={{ base: "16px", lg: "18px" }}>
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

      <Show below="lg">
        <Button ref={btnRef} onClick={onOpen}>
          <GiHamburgerMenu />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent minW="100vw">
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                <Flex
                  flexDir="column"
                  gap="16px"
                  fontWeight="600"
                  fontSize="20px"
                >
                  <Link href="/about">
                    <Text>About Us</Text>
                  </Link>
                  <Link href="/services">
                    <Text>Services</Text>
                  </Link>
                  <Link href="/contact">
                    <Text>Contact</Text>
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

export default NavbarDrawer;
