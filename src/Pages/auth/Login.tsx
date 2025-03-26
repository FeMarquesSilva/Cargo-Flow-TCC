import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import buttonReturn from "../../imgs/icons/voltar.png";
import { useNavigate } from "react-router-dom";
import ImagemDeFundo from "../../imgs/background/auth.png";
import Logo from "../../imgs/logo.png";
import CustomButton from "../../components/button";

const inputs: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "15px",
};

const Login = () => {
  const navegate = useNavigate();

  const handLogin = () => {
    navegate("/Register");
  };

  return (
    <Box>
      <Box
        position={"absolute"}
        bgImage={`url(${ImagemDeFundo})`}
        bgSize={"cover"}
        backgroundPosition={"center"}
        bgRepeat={"no-repeat"}
        opacity={"40%"}
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
          justifyItems={"center"}
        >
          <Image src={Logo} marginBottom={50} width={350} />

          <Flex justifySelf={"start"} width={"100%"} flexDir={"column"} gap={5}>
            <Box>
              <Text>CNPJ</Text>
              <Input style={inputs} type="text" placeholder="CNPJ da empresa" />
            </Box>

            <Box>
              <Text>Senha</Text>
              <Input style={inputs} type="password" placeholder="Sua senha" />
            </Box>
          </Flex>
        </Box>

        <CustomButton
          marginTop={5}
          label="Confirmar"
          width={"450px"}
          borderRadius={"15px"}
          backgroundColor={"rgba(1, 137, 183)"}
        />

        <Flex marginTop={5} flexDir={"row"} gap={5}>
          <Flex
            position={"relative"}
            backgroundColor={"white"}
            borderRadius={15}
            padding={0.5}
            gap={3}
          >
            <Box>
              <Text>Não tem uma conta?</Text>
            </Box>
            <Box>
              <Text
                color={"rgba(1, 137, 183)"}
                onClick={() => {
                  handLogin();
                }}
              >
                Criar conta
              </Text>
            </Box>
          </Flex>

          <Flex
            backgroundColor={"white"}
            position={"relative"}
            padding={0.5}
            borderRadius={15}
          >
            <Box>
              <Text color={"rgba(1, 137, 183)"}>
                Esqueceu sua senha?
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
