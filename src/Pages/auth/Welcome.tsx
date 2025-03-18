<<<<<<< HEAD
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Logo from "../../imgs/logo.png";
=======
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import Logo from "../../imgs/logo.png"
>>>>>>> f4a4c9ee67505c4c025e7131067d3f5bfe8fa1bb

const Welcome = () => {
  return (
    <Box>
<<<<<<< HEAD
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
=======
      <Flex justifyContent={"center"}>
        <Image
          src={Logo}
        />
      </Flex>
      <Text textAlign={"center"}>Gerencie sua transportadora de forma eficiente e profissional</Text>
      <Flex justifyContent={"center"}>
        <Flex flexDir={"column"} gap={2} boxSize={450}>
          <Button>Entrar</Button>
          <Button>Criar Conta</Button>
        </Flex>
      </Flex>
    </Box>
  );
}
>>>>>>> f4a4c9ee67505c4c025e7131067d3f5bfe8fa1bb

export default Welcome;
