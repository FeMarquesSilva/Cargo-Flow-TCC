import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImagemDeFundo from "../../imgs/background/auth.png";
import CustomButton from "../../components/button";
import buttonReturn from "../../imgs/icons/voltar.png";
import Logo from "../../imgs/logo.png";

const inputs: React.CSSProperties = {
  borderRadius: "15px",
  backgroundColor: "white",
  fontSize: "16px",
  font: "Arial",
  color: "rgba(199, 199, 199, 0.8)",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
};

const Register = () => {
  const navigate = useNavigate();

  const handlogin = () => {
    navigate("/login");
  };

  return (
    <Box>
      <Box
        position={"fixed"}
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
        onClick={() => navigate("/")}
        width={"50px"}
        padding={2}
        position={"fixed"}
      />

      <Flex flexDir={"column"} textAlign={"center"}>
        <Text fontSize={24} fontWeight={"bold"}>
          Criar Conta
        </Text>
        <Text marginBottom={5}>
          Preencha os dados abaixo para criar sua conta na plataforma
        </Text>
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        <Box
          position={"relative"}
          backgroundColor={"rgba(199, 199, 199, 0.8)"}
          padding={"20px"}
          width={"480px"}
          borderRadius={25}
          boxShadow={"5px 5px 15px rgba(0, 0, 0, 0.3)"}
        >
          <Flex justifyContent={"center"}>
            <Image src={Logo} width={"300px"} />
          </Flex>

          <Flex flexDir={"column"} gap={8}>
            <Box>
              <Text>Nome da Empresa</Text>
              <Input
                style={inputs}
                type={"text"}
                placeholder={"Nome da Empresa"}
              />
            </Box>

            <Box>
              <Text>CNPJ</Text>
              <Input
                style={inputs}
                type={"number"}
                placeholder={"00.000.000/0000-0"}
              />
            </Box>

            <Box>
              <Text>E-mail</Text>
              <Input
                style={inputs}
                type={"email"}
                placeholder={"seu@email.com"}
              />
            </Box>

            <Box>
              <Text>Senha</Text>
              <Input
                style={inputs}
                type={"password"}
                placeholder={"Digite uma senha forte"}
              />
            </Box>

            <Box>
              <Text>Confirmar senha</Text>
              <Input
                style={inputs}
                type={"password"}
                placeholder={"Digite novamente sua senha"}
              />
            </Box>
          </Flex>
        </Box>

        <Flex justifyContent={"center"}>
          <CustomButton
            marginTop={2}
            width={"450px"}
            backgroundColor={"rgba(1, 137, 183)"}
            label="Confirmar"
            onClick={() => {
              navigate("/");
            }}
          />
        </Flex>

        <Flex
          marginBottom={10}
          gap={5}
          justifyContent={"center"}
          marginTop={2}
          backgroundColor={"white"}
          position={"relative"}
          borderRadius={15}
          padding={1}
        >
          <Text>Já tem uma conta?</Text>
          <Text
            color={"rgba(1, 137, 183)"}
            position={"relative"}
            onClick={() => {
              handlogin();
            }}
          >
            Fazer login
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Register;
