import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import Logo from "../../imgs/logo.png";
import IconeCarga from "../../imgs/icons/caixa-carga.png";
import IconeMotorista from "../../imgs/icons/carteira-motorista.png";
import IconeRelatorio from "../../imgs/icons/relatorio.png";
import ImagemDeFundo from "../../imgs/background/welcome.png";
import { useNavigate } from "react-router-dom";

const cardInfo: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "rgb(197, 197, 197)",
  borderRadius: "15px",
  padding: "30px",
};

const buttons: React.CSSProperties = {
  borderRadius: "20px",
};

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        position={"absolute"} 
        bgImage={`url(${ImagemDeFundo})`}
        bgSize={"cover"}
        backgroundPosition={"center"}
        bgRepeat={"no-repeat"}
        height={"100vh"}
        width={"100%"}
        opacity={"20%"}
      />
      <Flex justifyContent={"center"}>
        <Image src={Logo} width={"300px"} />
      </Flex>

      <Text textAlign={"center"} fontSize={20}>
        Gerencie sua transportadora de forma eficiente e profissional
      </Text>

      <Flex flexDir={"row"} gap={"5"} marginTop={25} margin={"20px"}>
        {/* Componente informativo da Gestão de Cargas */}
        <Box style={cardInfo}>
          <Image src={IconeCarga} boxSize={"80px"} />
          <Text fontSize={24}>Gestão de Cargas</Text>
          <Text>
            Organize sua cargas de forma prática, facilitando o gerenciamento de
            fretes terceirizados.
          </Text>
        </Box>

        {/* Componente informativo de Motoristas */}
        <Box style={cardInfo}>
          <Image src={IconeMotorista} boxSize={"80px"} />
          <Text fontSize={24}>Motoristas</Text>
          <Text>
            Controle e visualize os motoristas cadastrados, com informações
            essenciais para a operação.
          </Text>
        </Box>

        {/* Componente informativo de Relatórios */}
        <Box style={cardInfo}>
          <Image src={IconeRelatorio} boxSize={"80px"} />
          <Text fontSize={24}>Relatórios</Text>
          <Text>
            Acesse dados detalhados sobre cargas, fretes e motoristas para uma
            melhor tomada de decisão.
          </Text>
        </Box>
      </Flex>

      <Flex justifyContent={"center"}>
        <Flex flexDir={"column"} gap={2} boxSize={"30%"} marginTop={"3%"}>
          <Button
            style={buttons}
            bgColor={"#0066CC"}
            _hover={{ bg: "#8FD3F7", borderColor: "#0066CC", color: "#0066CC" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Entrar
          </Button>
          <Button
            style={buttons}
            bgColor={"#FFFFFF"}
            borderColor={"#0066CC"}
            color={"#0066CC"}
            _hover={{ bg: "#0B6DA2", color: "#FFFFFF" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Criar Conta
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Welcome;
