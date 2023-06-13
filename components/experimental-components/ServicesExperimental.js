import { Flex, Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { services } from "@/config/dummyDataExperimental";

const ServicesExperimental = () => {
  const [data, setData] = useState(services);
  return (
    <Flex
      mx={{ base: "24px", lg: "128px" }}
      my={{ base: "32px", lg: "64px" }}
      flexDir="column"
      gap="32px"
    >
      <Flex flexDir="column">
        <Text fontSize={{ base: "24px", lg: "36px" }} fontWeight="700">
          Area of Services
        </Text>
        <Box
          height="6px"
          width={{ base: "184px", lg: "280px" }}
          bgColor="#2B4053"
          mb={{ base: "32px", lg: "64px" }}
        ></Box>
        <Flex
          flexWrap="wrap"
          maxWidth="1220px"
          justify="center"
          gap="48px"
          m="0 auto"
        >
          {data.map((service) => {
            return (
              <Flex
                key={service.id}
                flexDir="column"
                w={{ base: "300px", lg: "328px" }}
                h="458px"
                boxShadow="1px 3px 9px 5px rgba(189, 176, 176, 0.25)"
              >
                <Flex
                  Flex
                  flexDir="column"
                  bgColor="#354259"
                  p="18px 31px 18px 31px"
                  gap="10px"
                  h="140px"
                  justify="space-between"
                >
                  <Text color="white" fontSize="24px" fontWeight="700">
                    {service.title}
                  </Text>
                  <Box w="77px" h="5px" bgColor="white"></Box>
                </Flex>
                <Flex
                  p="24px 31px 24px 31px"
                  flexDir="column"
                  flex={1}
                  justify={"space-between"}
                >
                  <Text fontSize="16px" fontWeight="400" textAlign="justify">
                    {service.description}
                  </Text>
                  <Button w="full" border="3px solid #7DBEC2" bgColor="white">
                    Read More
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ServicesExperimental;
