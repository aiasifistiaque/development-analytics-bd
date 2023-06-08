import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Center, Button } from "@chakra-ui/react";
import { AiOutlineUpSquare } from "react-icons/ai";
import { services } from "@/config/dummyData";

const Specialization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(services);
  }, []);

  return (
    <Box px={{ base: "16px", lg: "128px" }}>
      <Center my="200px" flexDir="column" gap="64px" maxW="1080px" mx="auto">
        <Text fontSize="21px">OUR SPECIALIZATION</Text>
        <Text
          fontWeight="900"
          fontSize="24px"
          lineHeight="1.2"
          textAlign="center"
        >
          Development Analytics Bangladesh expertise is targeted at resolving a
          wide range of managerial and/or technical issues for clients mainly
          through investigation, survey, research and evaluation in the public
          and private sectors.
        </Text>
      </Center>
      <Flex
        maxW="1200px"
        mx="auto"
        flexWrap="wrap"
        justify={{ base: "center", lg: "center" }}
        gap="60px"
      >
        {data.map((item) => {
          return (
            <Flex
              key={item.id}
              w={{ base: "160px", lg: "200px" }}
              h="200px"
              display="flex"
              flexDir="column"
              align="center"
              gap="16px"
            >
              <Text>
                <AiOutlineUpSquare fontSize="100px" />
              </Text>
              <Text
                fontWeight="600"
                lineHeight="0.9"
                fontSize="18px"
                textAlign="center"
              >
                {item.text}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex justify="center" my="100px">
        <Button borderRadius="0" color="white" bg="black" h="55px" w="272px">
          Learn More about our services
        </Button>
      </Flex>
    </Box>
  );
};

export default Specialization;
