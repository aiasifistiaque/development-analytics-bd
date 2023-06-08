import { Inter } from "next/font/google";
import Page from "@/components/page-template/Page";
import { Text, Image } from "@chakra-ui/react";
import Hero from "@/components/hero/Hero";
import Prompt from "@/components/prompt/Prompt";

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
      <Text>Image</Text>
      <Text>Specialization</Text>
      <Text>Learn More about our Services</Text>
      <Text>Hey Personal</Text>
      <Text>Our Services</Text>
      <Text>Sound Intreguing</Text>
    </Page>
  );
}
