import React from "react";
import { Flex, Center, Text, Button, Box } from "@chakra-ui/react";
import { AiOutlineUpSquare } from "react-icons/ai";
import { serviceDetails } from "@/config/dummyData";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Flex mx={{ base: "16px", lg: "128px" }} flexDir="column">
      <Center my="100px" flexDir="column" gap="64px" maxW="1080px" mx="auto">
        <Flex flexDir="column" align="center" gap="32px">
          <Text fontSize="21px">OUR SERVICES</Text>
          <Text
            fontWeight="900"
            fontSize="24px"
            lineHeight="1.2"
            textAlign="center"
          >
            {`Our team members comprised of a group of sound and dependable professionals. The team is fully capable of handling contracts and projects of any size. Over the years, we have been active in establishing linkages and rapport with many potential resource personnel and organisations.  Our services includes`}
          </Text>
        </Flex>
      </Center>
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
