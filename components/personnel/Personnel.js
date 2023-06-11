import React, { useEffect, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { personnel } from "@/config/dummyData";
const Personnel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(personnel);
  }, []);
  return (
    <Flex flexDir="column" gap="30px" my="150px" align="center">
      <Text fontSize="21px" mb="50px">
        Our Key Personnel
      </Text>
      <Flex
        px={{ base: "16px", lg: "128px" }}
        maxW="1500px"
        mx="auto"
        flexWrap="wrap"
        justify={{ base: "center", lg: "center" }}
        gap="60px"
      >
        {data.map((data) => {
          return (
            <Flex
              flexDir="column"
              display="flex"
              align="center"
              gap="20px"
              key={data.id}
            >
              <Image
                src={data.image}
                fit="cover"
                alt={data.name}
                h={{ base: "120px", lg: "200px" }}
                w={{ base: "120px", lg: "200px" }}
                borderRadius="50%"
              />
              <Flex flexDir="column">
                <Text fontWeight="900" fontSize="22px">
                  Name
                </Text>
                <Text>Position</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Personnel;
