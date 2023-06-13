import React from "react";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
const IntriguingQuery = () => {
  return (
    <Flex
      background="linear-gradient(90deg, #9347FF 24.79%, #25BBD4 100%)"
      justify="center"
      align="center"
      color="white"
      height="485px"
    >
      <Center
        flexDir="column"
        maxW="450px"
        gap="26px"
        mx={{ base: "24px", lg: "128px" }}
      >
        <Text fontWeight="900" fontSize="32px">
          Sound intriguiging?
        </Text>
        <Text fontSize="16px" fontWeight="500" textAlign="center">
          CONTACT US TODAY TO KNOW MORE ABOUT OUR SERVICES AND CONNECT!
        </Text>
        <Link href="/contact">
          <Button
            border="2px solid white"
            borderRadius="none"
            background="transparent"
            color="white"
            fontWeight="700"
            fontSize="16px"
            padding="24px 36px"
            _hover={{
              backdropFilter: "blur(8px)",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          >
            CONTACT US
          </Button>
        </Link>
      </Center>
    </Flex>
  );
};

export default IntriguingQuery;
