import { Box, Flex, Input, Text } from "@chakra-ui/react";


const inputs: React.CSSProperties = {
    borderRadius: "20px",
  }



const Register = () => {
    return (
        <Box>
            <Flex flexDir={"column"} textAlign={"center"} marginTop={35}>
                <Text>Criar Conta</Text>
                <Text>Preencha os dados abaixo para criar sua conta na plataforma</Text>
            </Flex>

            <Flex justifyContent={"center"} alignItems={"center"}>
                <Box backgroundColor={"gray.100"} padding={"30px"} width={"50%"} borderRadius={25}>

                    <Flex flexDir={"column"} gap={8}>

                        <Box>
                            <Text>Nome da Empresa</Text>
                            <Input style={inputs} type={"text"} placeholder={"Nome da Empresa"} />
                        </Box>

                        <Box>
                            <Text>CNPJ</Text>
                            <Input style={inputs} type={"number"} placeholder={"00.000.000/0000-0"} />
                        </Box>

                        <Box>
                            <Text>E-mail</Text>
                            <Input style={inputs} type={"email"} placeholder={"seu@email.com"} />
                        </Box>

                        <Box>
                            <Text>Senha</Text>
                            <Input style={inputs} type={"password"} placeholder={"Digite uma senha forte"} />
                        </Box>

                        <Box>
                            <Text>Confirmar senha</Text>
                            <Input style={inputs} type={"password"} placeholder={"Digite novamente sua senha"} />
                        </Box>

                    </Flex>

                </Box>
            </Flex>

        </Box>
    );
}

export default Register;