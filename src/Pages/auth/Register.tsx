import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImagemDeFundo from "../../imgs/background/auth.png";
import CustomButton from "../../components/button";
import buttonReturn from "../../imgs/icons/voltar.png";

const inputs: React.CSSProperties = {
  borderRadius: "15px",
  backgroundColor: "white",
  fontSize: "16px",
  font: "Arial",
  color: "rgba(199, 199, 199, 0.8)",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
};

const textInfoInput: React.CSSProperties = {
  fontSize: "17px",
  font: "Arial",
  fontWeight: "bold",
  color: "rgb(94, 91, 91)",
};

const Register = () => {

    const navigate = useNavigate();

    const handlogin = () => {
      navigate("/login")
    }

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
        onClick={() => navigate("/")}
        width={"50px"}
        padding={2}
        position={"relative"}
      />

      <Flex flexDir={"column"} textAlign={"center"}>
        <Text fontSize={24} fontWeight={"bold"}>
          Criar Conta
        </Text>
        <Text marginBottom={5}>
          Preencha os dados abaixo para criar sua conta na plataforma
        </Text>
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"} >
        <Box
          position={"relative"}
          backgroundColor={"rgba(199, 199, 199, 0.8)"}
          padding={"20px"}
          width={"480px"}
          borderRadius={25}
          boxShadow={"5px 5px 15px rgba(0, 0, 0, 0.3)"}
        >
          <Flex flexDir={"column"} gap={8}>
            <Box>
              <Text style={textInfoInput}>Nome da Empresa</Text>
              <Input
                style={inputs}
                type={"text"}
                placeholder={"Nome da Empresa"}
              />
            </Box>

            <Box>
              <Text style={textInfoInput}>CNPJ</Text>
              <Input
                style={inputs}
                type={"number"}
                placeholder={"00.000.000/0000-0"}
              />
            </Box>

            <Box>
              <Text style={textInfoInput}>E-mail</Text>
              <Input
                style={inputs}
                type={"email"}
                placeholder={"seu@email.com"}
              />
            </Box>

            <Box>
              <Text style={textInfoInput}>Senha</Text>
              <Input
                style={inputs}
                type={"password"}
                placeholder={"Digite uma senha forte"}
              />
            </Box>

            <Box>
              <Text style={textInfoInput}>Confirmar senha</Text>
              <Input
                style={inputs}
                type={"password"}
                placeholder={"Digite novamente sua senha"}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex gap={5} justifyContent={"center"} marginTop={1}>
        <Text fontWeight={"bold"}>Já tem uma conta?</Text>
        <Text color={"rgba(1, 137, 183)"} fontWeight={"bold"} position={"relative"} onClick={()=> {handlogin()}}>Fazer login</Text>
      </Flex>

      <Flex justifyContent={"center"}>
        <CustomButton
          marginTop={6}
          width={"30%"}
          backgroundColor={"rgba(1, 137, 183)"}
          label="Confirmar"
          onClick={()=> {navigate("/")}}
        />
      </Flex>

    </Box>
  );
};

export default Register;
