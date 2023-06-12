import React from "react";
import Page from "@/components/page-template/Page";
import IntriguingQuery from "@/components/intriguing/IntriguingQuery";
import PageTitle from "@/components/page-title/PageTitle";
import { Box, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react";

const About = () => {
  return (
    <Page>
      <PageTitle text="About Us" />
      <Box>
        <Box
          px={{ base: "24px", lg: "128px" }}
          margin="0 auto"
          mt={{ base: "32px", lg: "77px" }}
          fontWeight="500"
          fontSize="16px"
          lineHeight="1.5"
        >
          <Text mb="24px">
            Development Analytics BD is a private consultancy firm in Bangladesh
            that provides services to health, population, nutrition,
            agriculture, environment, social communication, livestock,
            socio-economic development, and women and children&#39;s development
            research. It has an unparalleled professional commitment and
            integrity to execute research assignments. Analytical BD
            has demonstrated its professional capability in designing, planning
            and managing complex research projects.
          </Text>
          <Text mb="24px">
            Analytical BD conducts quantitative and qualitative surveys.
            Generally, the studies are evaluation and monitoring of development
            programs/ projects, including baseline, midline, and follow-up
            surveys, and operation research, undertaken under contracts from the
            national and international agencies and institutions. Development
            Analytics BD supports capacity building and quality assurance for
            the overall implementation of the projects/programs.
          </Text>
          <Text mt="32px" mb="16px" fontWeight="800" fontSize="22px">
            ORGANIZATION AND MANAGEMENT, AND HUMAN RESOURCE
          </Text>
          <Text mb="24px">
            Development Analytics Banngladesh operates in a structure with
            highly experienced personnel working as associates and a network of
            professionals having expertise in the areas of Research, surveys,
            and Studies. EA maintains an advisory panel of highly qualified and
            experienced professionals to guide management in all technical
            issues. In addition, EA has a pool of talented Field Researchers
            numbering more than 100 (boys and girls including tribal ones), who
            are hired as and when necessary. All of them are trained in Tablet
            operations. They are available on short notice.
          </Text>
          <Text mb="24px">
            Five senior-level staff members provide research support, quality
            assurance and quality control, and management support for EA
            operations. The Executive Director is responsible for all contracts
            and contractual issues and supervises all lead technical staff and
            deliverables for all contracts and task orders, and is also
            extensively involved in the review of personnel functions. Tow
            Research Specialist and the Monitoring and Evaluation Specialist
            provide research support and backstopping to short-term consultants
            and ensure the quality output of the assignment. The Field Operation
            Manager provides quality assurance and quality control as well as
            management support for Development Analytics operations
          </Text>
          <Text mb="24px">
            Development Analytics ensures that the evaluation proceeds in line
            with the ToR, norms and standards, and the profession&#39;s code of
            conduct. The EA team ensures that the quality assurance system is
            systematically applied to the evaluation and meets quality standards
            and deadlines.
          </Text>
          <Text mb="24px">
            The finance officer manages EA&#39;s financial operations, cost
            forecasting, budgeting, and reports to the Executive Director. The
            Office Manager ensures that EA&#39;s projects are supported by
            administrative and other staff and all logistics are in place as and
            when needed. EA has established existing policies and procedures
            regarding personnel management, travel, billing, the use of
            consultants, and other practical management issues that are
            essential to the smooth administration of the contracts.
          </Text>
          <Text mt="32px" mb="16px" fontWeight="800" fontSize="22px">
            OUR SERENGTH
          </Text>
          <Text mb="24px">
            Development Analytics team members comprised of a group of sound and
            dependable professionals. The team is fully capable of handling
            contracts and projects of any size. Over the years, EA has been
            active in establishing linkages and rapport with many potential
            resource personnel and organizations.
          </Text>
          <Text mb="24px">
            Development Analytics team will always reflect the following
            strengths:
          </Text>
          <UnorderedList spacing="16px">
            <ListItem>
              in-depth understanding of the vital community-based development
              program dynamics and program management factors of both GOB and
              NGO sectors;
            </ListItem>
            <ListItem>
              strong background and skills in the areas of program based
              study/research, evaluation, situation analysis techniques and
              verification of program outputs
            </ListItem>
            <ListItem>
              The associates have long-time practical experiences in management,
              monitoring, and supervision of NGO, donor, and government
              agency-operated research and development programs with INGOs, UN
              system agencies, GOB, World Bank and other leading international
              and national agencies.
            </ListItem>
          </UnorderedList>
        </Box>
        <Spacer h={{ base: "64px", lg: "200px" }} />
      </Box>
      <IntriguingQuery />
    </Page>
  );
};

export default About;
