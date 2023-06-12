import { Box, Flex } from "@chakra-ui/react";

import React from "react";

const PageTitle = ({ text }) => {
  return (
    <Box>
      <Flex height="291px" justify="center" align="center" bgColor="#EEEEEE">
        <Box
          padding="14px 39px"
          bgColor="#111111"
          color="white"
          fontSize="22px"
          fontWeight="500"
        >
          {text}
        </Box>
      </Flex>
    </Box>
  );
};

export default PageTitle;
