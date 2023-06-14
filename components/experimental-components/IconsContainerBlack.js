import React, { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import { iconData } from "@/config/dummyDataExperimental";

const IconsContainerBlack = () => {
  const [data, setData] = useState(iconData);
  return (
    <Flex
      flexWrap="wrap"
      borderRadius="11px"
      justify="space-around"
      gap="32px"
      width="300px"
      height="300px"
    >
      {data.map((icon) => {
        return (
          <Flex key={icon.id}>
            <Image src={icon.icon} alt={icon.id} width="64px" height="64px" />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default IconsContainerBlack;
