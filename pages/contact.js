import React from "react";

import { Flex, Center, Text } from "@chakra-ui/react";
import Page from "@/components/page-template/Page";
import PageTitle from "@/components/page-title/PageTitle";

const Contact = () => {
  return (
    <Page>
      <PageTitle text="Contact Us" />
      <Flex mx={{ base: "24px", lg: "128px" }}>
        <Center
          my={{ base: "100px", lg: "200px" }}
          flexDir="column"
          gap={{ base: "32px", lg: "64px" }}
          maxW="1080px"
          mx="auto"
        >
          <Flex
            flexDir="column"
            align="center"
            gap={{ base: "22px", lg: "44px" }}
          >
            <Text fontWeight="800" fontSize={{ base: "30px", lg: "44px" }}>
              Contact Us Today
            </Text>
            <Text
              fontWeight="500"
              fontSize={{ base: "16px", lg: "24px" }}
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
            fontSize={{ base: "16px", lg: "24px" }}
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
