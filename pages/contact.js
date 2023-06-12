import React from "react";

import { Flex, Center, Text, Link as ChakraLink } from "@chakra-ui/react";
import Page from "@/components/page-template/Page";
import PageTitle from "@/components/page-title/PageTitle";

const Contact = () => {
  return (
    <Page>
      <PageTitle text="Contact Us" />
      <Flex mx={{ base: "16px", lg: "128px" }}>
        <Center my="200px" flexDir="column" gap="64px" maxW="1080px" mx="auto">
          <Flex flexDir="column" align="center" gap="44px">
            <Text fontWeight="800" fontSize="44px">
              Contact Us Today
            </Text>
            <Text
              fontWeight="500"
              fontSize="24px"
              lineHeight="1.2"
              textAlign="center"
            >
              Send your querues at{" "}
              <Text textDecor="underline" as="span">
                {" "}
                info@developmentanalyticsbd.com
              </Text>{" "}
              and we'll get back to you as soon as possible.
            </Text>
          </Flex>

          <Text
            fontWeight="500"
            fontSize="24px"
            lineHeight="1.2"
            textAlign="center"
          >
            We are located at House 88, Road 17/A, Banani, Dhaka 1213,
            Bangladesh
          </Text>
        </Center>
      </Flex>
    </Page>
  );
};

export default Contact;
