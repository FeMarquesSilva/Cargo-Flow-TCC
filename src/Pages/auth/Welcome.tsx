import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import Logo from "../../imgs/logo.png";

const Welcome = () => {
  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Image src={Logo} justifyContent={"center"} />
      </Flex>

      <Text textAlign={"center"} fontSize={20}>
        Gerencie sua transportadora de forma eficiente e profissional
      </Text>

      <Flex flexDir={"row"} gap={"5"} marginTop={25}>

        <Flex flexDir={"column"} textAlign={"center"}>
          <Text fontSize={24}>Gestão de Cargas</Text>
          <Text>
            Organize sua cargas de forma prática, facilitando o gerenciamento de
            fretes terceirizados.
          </Text>
        </Flex>

        <Flex flexDir={"column"} textAlign={"center"}>
          <Text fontSize={24}>Motoristas</Text>
          <Text>
            Controle e visualize os motoristas cadastrados, com informações
            essenciais para a operação.
          </Text>
        </Flex>

        <Flex flexDir={"column"} textAlign={"center"}>
          <Text fontSize={24}>Relatórios</Text>
          <Text>
            Acesse dados detalhados sobre cargas, fretes e motoristas para uma
            melhor tomada de decisão.
          </Text>
        </Flex>
      </Flex>

      <Flex justifyContent={"center"}>
        <Flex flexDir={"column"} gap={2} boxSize={"30%"} marginTop={"12%"}>
          <Button borderRadius={"25px"}>Entrar</Button>
          <Button borderRadius={"25px"}>Criar Conta</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Welcome;
