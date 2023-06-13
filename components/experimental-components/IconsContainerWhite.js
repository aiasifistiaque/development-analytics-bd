import React, { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import { iconDataWhite } from "@/config/dummyDataExperimental";
const IconsContainerWhite = () => {
  const [data, setData] = useState(iconDataWhite);
  return (
    <Flex
      flexWrap="wrap"
      background="rgba(43, 64, 83, 0.7)"
      borderRadius="11px"
      justify="space-around"
      gap="32px"
      width="300px"
      height="300px"
    >
      {data.map((icon) => {
        return (
          <Flex>
            <Image
              key={icon.id}
              src={icon.icon}
              alt={icon.id}
              width="64px"
              height="64px"
            />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default IconsContainerWhite;
