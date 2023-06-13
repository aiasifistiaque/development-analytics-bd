import React from "react";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import NavbarExperimental from "./NavbarExperimental";
import Footer from "../footer/Footer";

const PageExperimental = ({ children }) => {
  const padding = useBreakpointValue({ base: 6, lg: 32 });
  return (
    <>
      <NavbarExperimental />
      <Box as="main" style={{ minHeight: "100vh" }}>
        <Box as="div">{children}</Box>
      </Box>
      <Footer />
    </>
  );
};

export default PageExperimental;
