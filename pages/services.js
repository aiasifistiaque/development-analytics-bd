import IntriguingQuery from "@/components/intriguing/IntriguingQuery";
import Page from "@/components/page-template/Page";
import PageTitle from "@/components/page-title/PageTitle";
import ServiceDetails from "@/components/service-details/ServiceDetails";
import Specialization from "@/components/specialization/Specialization";
import { Box, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Page>
      <PageTitle text={"Our Services"} />
      <Box
        px={{ base: "24px", lg: "128px" }}
        margin="0 auto"
        mt="77px"
        mb="100px"
        fontWeight="500"
        fontSize="16px"
        lineHeight="1.5"
      >
        <Text mt="32px" mb="16px" fontWeight="800" fontSize="22px">
          OUR STRENGTH
        </Text>
        <Text mb="24px">
          Development Analytics Bangladesh expertise is targeted at resolving a
          wide range of managerial and/or technical issues for clients mainly
          through investigation, survey, research and evaluation in the public
          and private sectors. Important sectors or areas of services include:
        </Text>
        <ServiceDetails />
        <Spacer height={{ base: "100px", lg: "200px" }} />
        <Text
          mt={{ base: "0", lg: "32px" }}
          mb={{ base: "16px", lg: "24px" }}
          fontWeight="800"
          fontSize="22px"
        >
          OUR SPECIALIZATION
        </Text>
      </Box>

      <Specialization />
      <Spacer height={{ base: "100px", lg: "200px" }} />
      <IntriguingQuery />
    </Page>
  );
};

export default Services;
