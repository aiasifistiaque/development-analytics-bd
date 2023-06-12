import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineUpSquare } from "react-icons/ai";
import { services } from "@/config/dummyData";

const Specialization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(services);
  }, []);

  return (
    <Box px={{ base: "16px", lg: "128px" }}>
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
              w={{ base: "140px", lg: "200px" }}
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
    </Box>
  );
};

export default Specialization;
