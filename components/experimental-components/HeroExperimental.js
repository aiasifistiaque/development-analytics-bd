import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import IconsContainerWhite from "./IconsContainerWhite";
const HeroExperimental = () => {
  return (
    <Flex h="calc(100vh - 66px)" position="relative">
      <Flex flex={1} bgColor="#2B4053"></Flex>
      <Flex
        flex={1}
        bg="url(assets/experimental/image18.png)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      ></Flex>
      <Flex
        position="absolute"
        width="80%"
        height="60%"
        border="10px solid #7DBEC2"
        top="0"
        left="0"
        bottom="0"
        right="0"
        mx="auto"
        my="auto"
      >
        <Flex flex={1} color="white">
          <Flex m="auto auto" maxW="560px" flexDir="column" gap="27px">
            <Text fontSize="36px" fontWeight="700">
              Development Analytics Bangladesh
            </Text>
            <Text fontSize="16px" fontWeight="400">
              Centre for Program and Research Solutions Bangladesh Limited
              (CPRSBD) is a private consultancy firm in Bangladesh that provides
              services to health, population, nutrition, agriculture, WASH
              (Water, Sanitation and hygiene), environment, social
              communication, livestock, socio-economic development, and women
              and children's development research country.
            </Text>
          </Flex>
        </Flex>
        <Flex flex={1}>
          <Flex maxWidth="560px" m="auto auto">
            <IconsContainerWhite />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroExperimental;
