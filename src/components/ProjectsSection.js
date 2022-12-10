import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Create React App",
    description:
      "Set up a modern web app by running one command.",
    getImageSrc: () => require("../images/react.png"),
    link: "https://create-react-app.dev/",
  },
  {
    title: "Ethereum",
    description:
      "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
    getImageSrc: () => require("../images/ethereum.png"),
    link: "https://ethereum.org/en/",
  },
  {
    title: "Wikipedia",
    description:
      "The free encyclopedia that anyone can edit.",
    getImageSrc: () => require("../images/wikipedia.png"),
    link: "https://en.wikipedia.org/wiki/Main_Page",
  },
  {
    title: "Ubuntu",
    description:
      "Ubuntu is an open source software operating system that runs from the desktop, to the cloud, to all your internet connected things.",
    getImageSrc: () => require("../images/ubuntu.png"),
    link: "https://ubuntu.com/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
