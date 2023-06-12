import React from "react";
import { Flex, Center, Text, Button, Box } from "@chakra-ui/react";
import { AiOutlineUpSquare } from "react-icons/ai";
import { serviceDetails } from "@/config/dummyData";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Flex mx={{ base: "16px", lg: "128px" }} flexDir="column">
      <Flex
        flexWrap="wrap"
        gap="64px"
        maxW="1200px"
        justify="center"
        margin="64px auto"
      >
        {serviceDetails.map((service) => {
          return (
            <Flex key={service.id} w={{ base: "full", lg: "500px" }} gap="16px">
              <Box>
                <AiOutlineUpSquare fontSize="64px" />
              </Box>
              <Flex flexDir="column" gap="8px">
                <Text fontSize="16px" fontWeight="900">
                  {service.title}:
                </Text>
                <Text fontSize="16px" fontWeight="600">
                  {service.detail}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ServiceDetails;
