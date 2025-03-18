import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Logo from "../../imgs/logo.png";

const Welcome = () => {
  return (
    <Box>
      <Heading>
        <Flex justifyContent={"center"}>
          <Image src={Logo} justifyContent={"center"} />
        </Flex>
      </Heading>
      <Text textAlign={"center"}>
        Gerencie sua transportadora de forma eficiente e profissional
      </Text>
    </Box>
  );
};

export default Welcome;
