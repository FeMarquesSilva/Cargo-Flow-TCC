import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImagemDeFundo from "../../imgs/background/auth.png";
import CustomButton from "../../components/button";

const inputs: React.CSSProperties = {
  borderRadius: "15px",
  backgroundColor: "white",
  fontSize: "16px",
};

const textInfoInput: React.CSSProperties = {
  fontSize: "16px",
};

const Register = () => {

    const navigate = useNavigate();

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
          backgroundColor={"rgba(187, 187, 187, 0.75)"}
          padding={"20px"}
          width={"480px"}
          borderRadius={25}
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

      <Flex justifyContent={"center"}>
        <CustomButton
          marginTop={2}
          width={"30%"}
          backgroundColor={"rgba(1, 137, 183)"}
          label="Confirmar"
          onClick={()=> {navigate("/")}}
        />
      </Flex>

      <Flex gap={5} justifyContent={"center"} marginTop={1}>
        <Text>Já tem uma conta?</Text>
        <Text color={"rgba(1, 137, 183)"}>Fazer login</Text>
      </Flex>
    </Box>
  );
};

export default Register;
