import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import Logo from "../../imgs/logo.png"

const Welcome = () => {
  return (
    <Box>
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

export default Welcome;