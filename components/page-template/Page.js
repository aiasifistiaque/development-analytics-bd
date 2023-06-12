import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import { Box, useBreakpointValue } from "@chakra-ui/react";

const Page = ({ children }) => {
  const padding = useBreakpointValue({ base: 6, lg: 32 });
  return (
    <>
      <Navbar />
      <Box as="main" style={{ minHeight: "100vh" }}>
        <Box as="div">{children}</Box>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
