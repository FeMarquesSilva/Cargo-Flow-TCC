import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import buttonReturn from "../../imgs/icons/voltar.png";
import { useNavigate } from "react-router-dom";
import ImagemDeFundo from "../../imgs/background/auth.png";
import Logo from "../../imgs/logo.png";
import CustomButton from "../../components/button";

const inputs: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
};

const Login = () => {
  const navegate = useNavigate();

  const handLogin = () => {
    navegate("/Register", { replace: true });
  };

  const handHome = () => {
    navegate("/Home", { replace: true });
  }

  return (
    <Box>
      <Box
        position="fixed"
        width="100%"
        height="110vh"
        bg="rgba(0, 0, 0, 0.5)" // Ajuste a transparência aqui
        marginTop={-10}
        zIndex={1} // Garante que a camada escura fique sobre a imagem de fundo
      />

      <Box
        position={"absolute"}
        bgImage={`url(${ImagemDeFundo})`}
        bgSize={"cover"}
        backgroundPosition={"center"}
        bgRepeat={"no-repeat"}
        opacity={"40%"}
        height={"100vh"}
        width={"100%"}
        zIndex={0}
      />

      <Image
        src={buttonReturn}
        alt="Botão de voltar"
        onClick={() => navegate("/")}
        width={"50px"}
        padding={2}
        position={"relative"}
        zIndex={1}
      />

      <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"} zIndex={1}>
        <Box
          backgroundColor={"rgba(68, 68, 68, 0.8)"}
          boxShadow={"5px 5px 15px rgba(0, 0, 0, 0.3)"}
          borderRadius={25}
          position={"relative"}
          padding={"20px"}
          width={"480px"}
          justifyItems={"center"}
          zIndex={1}
        >
          <Image src={Logo} marginBottom={"10px"} width={350} />
          <Text color={"white"} fontWeight={"bold"} fontSize={"24px"} marginBottom={"25px"}>Bem Vindo ao Cargo Flow!</Text>
          <Text color={"white"} fontWeight={"bold"} marginBottom={"10px"}>Preencha os campos abaixo para entrar</Text>
          <Flex justifySelf={"start"} width={"100%"} flexDir={"column"} gap={5}>

            <Box>
              <Input style={inputs} type="text" placeholder="CNPJ da empresa" />
            </Box>

            <Box>
              <Input style={inputs} type="password" placeholder="Sua senha" />
            </Box>

            <Text color={"rgba(1, 137, 183)"}>
              Esqueceu sua senha?
            </Text>

          </Flex>
        </Box>

        <CustomButton
          zIndex={1}
          marginTop={5}
          label="Confirmar"
          width={"450px"}
          borderRadius={"15px"}
          backgroundColor={"rgba(1, 137, 183)"}
          onClick={() => { handHome() }}
        />

        <Flex marginTop={5} flexDir={"row"} gap={5}>
          <Flex
            position={"relative"}
            backgroundColor={"rgba(68, 68, 68, 0.8)"}
            borderRadius={15}
            padding={0.5}
            zIndex={1}
            gap={3}
          >
            <Box>
              <Text color={"white"}>Não tem uma conta?</Text>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
