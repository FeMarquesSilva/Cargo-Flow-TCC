import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import buttonReturn from "../../imgs/icons/voltar.png"
import { useNavigate } from "react-router-dom";
import ImagemDeFundo from "../../imgs/background/auth.png";
import Logo from "../../imgs/logo.png"
import CustomButton from "../../components/button";

const Login = () => {

  const navegate = useNavigate()

  return (
    <Box>
      <Box
        position={"absolute"}
        bgImage={`url(${ImagemDeFundo})`}
        bgSize={"cover"}
        backgroundPosition={"center"}
        bgRepeat={"no-repeat"}
        opacity={"26%"}
        height={"100vh"}
        width={"100%"}
      />

      <Image
        src={buttonReturn}
        alt="Botão de voltar"
        onClick={() => navegate("/")}
        width={"50px"}
        padding={2}
        position={"relative"}
      />

      <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
        <Box
          backgroundColor={"rgba(199, 199, 199, 0.8)"}
          borderRadius={25}
          position={"relative"}
          padding={"20px"}
          width={"480px"}
        >

          <Image
            src={Logo}
          />

          <Text>CNPJ</Text>
          <Input
            type="text"
          />

          <Text>Senha</Text>
          <Input
            type="password"
          />

        </Box>

      <Text>Esqueceu sua senha?</Text>

      </Flex>


      <CustomButton
        label="Confirmar"
      />

      <Flex gap={5}>
        <Text>Não tem uma conta?</Text>
        <Text>Criar conta</Text>
      </Flex>

    </Box>
  );
};

export default Login;
