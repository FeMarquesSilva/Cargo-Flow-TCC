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
  backgroundColor: "white",
  borderRadius: "15px",
  padding: "30px",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
  position: "relative",
  zIndex: "1"
};

const buttons: React.CSSProperties = {
  borderRadius: "20px",
};

const Welcome = () => {
  const navigate = useNavigate();

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
        bgImage={`url(${ImagemDeFundo})`}
        position="fixed"
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        height="110vh"
        width="100%"
        opacity="40%"
        zIndex={0}
        marginTop={-10}
      />

      <Flex marginBottom={"40px"} justifyContent={"center"} alignItems={"center"} zIndex={1} flexDir={"column"}>
        <Box zIndex={1} >
          <Image src={Logo} width={"400px"} zIndex={1} />
        </Box>
        <Box zIndex={1}>
          <Text textAlign={"center"} fontSize={20} color={"white"}>
            Gerencie sua transportadora de forma eficiente e profissional
          </Text>
        </Box>
      </Flex>

      <Flex
        flexDir={"row"}
        gap={"5"}
        margin={"25px"}
        position={"relative"}
      >
        {/* Componente informativo da Gestão de Cargas */}
        <Box style={cardInfo}>
          <Image src={IconeCarga} boxSize={"100px"} />
          <Text fontSize={24}>Gestão de Cargas</Text>
          <Text>
            Organize sua cargas de forma prática, facilitando o gerenciamento de fretes terceirizados.
          </Text>
        </Box>

        {/* Componente informativo de Motoristas */}
        <Box style={cardInfo}>
          <Image src={IconeMotorista} boxSize={"100px"} />
          <Text fontSize={24}>Motoristas</Text>
          <Text>
            Controle e visualize os motoristas cadastrados, com informações
            essenciais para a operação.
          </Text>
        </Box>

        {/* Componente informativo de Relatórios */}
        <Box style={cardInfo}>
          <Image src={IconeRelatorio} boxSize={"100px"} />
          <Text fontSize={24}>Relatórios</Text>
          <Text>
            Acesse dados detalhados sobre cargas, fretes e motoristas para uma
            melhor tomada de decisão.
          </Text>
        </Box>
      </Flex>

      <Flex justifyContent={"center"} >
        <Flex flexDir={"column"} gap={2} boxSize={"30%"} marginTop={"3%"} zIndex={1}>
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
