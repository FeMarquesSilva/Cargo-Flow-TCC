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

const textesInfInputs: React.CSSProperties = {
  color: "white",
  fontWeight: "bold"
}

const Register = () => {
  const navigate = useNavigate();

  const handlogin = () => {
    navigate("/login");
  };

  const navegate = useNavigate()

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
        position={"fixed"}
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
        position={"fixed"}
        zIndex={1}
      />

      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"} >
        <Box
          position={"relative"}
          backgroundColor={"rgba(68, 68, 68, 0.8)"}
          padding={"20px"}
          width={"480px"}
          zIndex={1}
          borderRadius={25}
          marginTop={"50px"}
          boxShadow={"5px 5px 15px rgba(0, 0, 0, 0.3)"}
        >
          <Flex justifyContent={"center"}>
            <Image src={Logo} width={"300px"} />
          </Flex>

          <Flex flexDir={"column"} textAlign={"center"}>
            <Text fontSize={24} fontWeight={"bold"} zIndex={1} color={"white"}>
              Criar Conta
            </Text>
            <Text marginBottom={5} zIndex={1} color={"white"}>
              Preencha os dados abaixo para criar sua conta na plataforma
            </Text>
          </Flex>

          <Flex flexDir={"column"} gap={4} zIndex={1}>
            <Input style={inputs} type={"text"} placeholder={"Nome da Empresa"}/>
            <Input style={inputs} type={"text"} placeholder={"CNPJ"}/>
            <Input style={inputs} type={"email"} placeholder={"seu@email.com"}/>
            <Input style={inputs} type={"password"} placeholder={"Crie uma senha forte"}/>
            <Input style={inputs} type={"password"} placeholder={"Confirme sua senha"}/>
          </Flex>

        </Box>

        <Flex justifyContent={"center"}>
          <CustomButton
            marginTop={2}
            width={"450px"}
            backgroundColor={"rgba(1, 137, 183)"}
            label="Confirmar"
            zIndex={1}
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
          position={"relative"}
          borderRadius={15}
          padding={1}
          zIndex={1}
        >
          <Text color={"white"}>Já tem uma conta?</Text>
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
