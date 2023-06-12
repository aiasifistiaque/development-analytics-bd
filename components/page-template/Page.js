import React from "react";
import NavbarDrawer from "../navbar/NavbarDrawer";
import Footer from "../footer/Footer";

import { Box, useBreakpointValue } from "@chakra-ui/react";

const Page = ({ children }) => {
  const padding = useBreakpointValue({ base: 4, lg: 32 });
  return (
    <>
      <NavbarDrawer />
      <Box as="main" style={{ minHeight: "100vh" }}>
        <Box as="div">{children}</Box>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
