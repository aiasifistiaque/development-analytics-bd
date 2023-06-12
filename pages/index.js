import { Inter } from "next/font/google";
import Page from "@/components/page-template/Page";
import Link from "next/link";
import {
  Text,
  Image,
  Flex,
  Center,
  Box,
  Button,
  Spacer,
} from "@chakra-ui/react";
import Hero from "@/components/hero/Hero";
import Prompt from "@/components/prompt/Prompt";
import Specialization from "@/components/specialization/Specialization";
import Personnel from "@/components/personnel/Personnel";
import ServiceDetails from "@/components/service-details/ServiceDetails";
import IntriguingQuery from "@/components/intriguing/IntriguingQuery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page>
      <Hero />
      <Prompt />
      <Image
        src="/assets/Photo2.jpg"
        alt="image2"
        width="100%"
        height="495px"
        objectFit="cover"
      />
      <Box px={{ base: "16px", lg: "128px" }}>
        <Center my="200px" flexDir="column" gap="64px" maxW="1080px" mx="auto">
          <Text fontSize="21px">OUR SPECIALIZATION</Text>
          <Text
            fontWeight="900"
            fontSize="24px"
            lineHeight="1.2"
            textAlign="center"
          >
            Development Analytics Bangladesh expertise is targeted at resolving
            a wide range of managerial and/or technical issues for clients
            mainly through investigation, survey, research and evaluation in the
            public and private sectors.
          </Text>
        </Center>
      </Box>
      <Specialization />
      <Flex justify="center" my="100px">
        <Link href="/services">
          <Button
            borderRadius="0"
            color="white"
            bg="black"
            h="55px"
            w="272px"
            _hover={{
              color: "black",
              background: "white",
            }}
          >
            Learn More about our services
          </Button>
        </Link>
      </Flex>
      <Personnel />
      {/* <Flex justify="center" my="100px">
        <Link href="/team">
          <Button borderRadius="0" color="white" bg="black" h="55px" w="272px">
            Learn More about our team
          </Button>
        </Link>
      </Flex> */}
      <Flex mx={{ base: "16px", lg: "128px" }} flexDir="column">
        <Center my="100px" flexDir="column" gap="64px" maxW="1080px" mx="auto">
          <Flex flexDir="column" align="center" gap="32px">
            <Text fontSize="21px">OUR SERVICES</Text>
            <Text
              fontWeight="900"
              fontSize="24px"
              lineHeight="1.2"
              textAlign="center"
            >
              {`Our team members comprised of a group of sound and dependable professionals. The team is fully capable of handling contracts and projects of any size. Over the years, we have been active in establishing linkages and rapport with many potential resource personnel and organizations.  Our services includes`}
            </Text>
          </Flex>
        </Center>
      </Flex>
      <ServiceDetails />
      <Spacer height="100px" />
      <IntriguingQuery />
    </Page>
  );
}
