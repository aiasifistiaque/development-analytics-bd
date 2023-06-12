import { Inter } from "next/font/google";
import Page from "@/components/page-template/Page";
import { Text, Image } from "@chakra-ui/react";
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
      <Specialization />
      <Personnel />
      <ServiceDetails />
      <IntriguingQuery />
    </Page>
  );
}
