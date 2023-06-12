import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Hide,
  Show,
  Text,
  Button,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [display, setDisplay] = useState("none");
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
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            onClick={() => setDisplay("flex")}
          />
          <MenuList color="black">
            <Link href="/about">
              <MenuItem>About Us</MenuItem>
            </Link>
            <Link href="/services">
              <MenuItem>Services</MenuItem>
            </Link>
            <Link href="/contact">
              <MenuItem>Contact</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Show>
    </Flex>
  );
};

export default Navbar;
