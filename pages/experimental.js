import React, { useState } from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import PageExperimental from "@/components/experimental-components/PageExperimental";
import HeroExperimental from "@/components/experimental-components/HeroExperimental";
import ServicesExperimental from "@/components/experimental-components/ServicesExperimental";
import { iconData } from "@/config/dummyDataExperimental";
const Experimental = () => {
  const [data, setData] = useState(iconData);
  return (
    <PageExperimental>
      <HeroExperimental />

      <Flex
        mx={{ base: "24px", lg: "128px" }}
        my={{ base: "32px", lg: "64px" }}
        flexDir="column"
        gap="32px"
      >
        <Flex flexDir="column">
          <Text fontSize={{ base: "24px", lg: "36px" }} fontWeight="700">
            What We Do
          </Text>
          <Box
            height="6px"
            width={{ base: "144px", lg: "225px" }}
            bgColor="#2B4053"
          ></Box>
        </Flex>
        <Text fontWeight="400" fontSize="16px">
          Development Analytics Bangladesh conducts quantitative and qualitative
          surveys that include research design, planning, and execution.
          Generally, the studies are evaluation and monitoring of development
          programs/ projects, including baseline, midline, and follow-up
          surveys, and operation research, undertaken under contracts from the
          national and international agencies and institutions. A supports
          capacity building and quality assurance for the overall implementation
          of the projects/programs.
        </Text>
        <Flex justify="space-around">
          {data.map((icon) => {
            return (
              <Flex flex={1} justify="center" align="center" key={icon.id}>
                <Image src={icon.icon} alt={icon.id} />
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <ServicesExperimental />
      <Flex
        mx={{ base: "24px", lg: "128px" }}
        my={{ base: "32px", lg: "64px" }}
        flexDir="column"
        gap="32px"
      >
        <Flex flexDir="column">
          <Text fontSize={{ base: "24px", lg: "36px" }} fontWeight="700">
            What We Do
          </Text>
          <Box
            height="6px"
            width={{ base: "144px", lg: "225px" }}
            bgColor="#2B4053"
          ></Box>
        </Flex>
        <Text fontWeight="400" fontSize="16px">
          Development Analytics Bangladesh conducts quantitative and qualitative
          surveys that include research design, planning, and execution.
          Generally, the studies are evaluation and monitoring of development
          programs/ projects, including baseline, midline, and follow-up
          surveys, and operation research, undertaken under contracts from the
          national and international agencies and institutions. A supports
          capacity building and quality assurance for the overall implementation
          of the projects/programs.
        </Text>
      </Flex>
    </PageExperimental>
  );
};

export default Experimental;
