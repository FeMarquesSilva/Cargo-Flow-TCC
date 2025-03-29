import { Box, Flex, Image, Text } from "@chakra-ui/react";
import IconHome from "../imgs/icons/footnav/home.png";
import IconDashboard from "../imgs/icons/footnav/dashboard.png";
import IconCarga from "../imgs/icons/footnav/cargas.png";
import IconMotoristas from "../imgs/icons/footnav/motoristas.png";
import IconRelatorios from "../imgs/icons/footnav/relatórios.png";
import { useNavigate } from "react-router-dom";

const cardsSettings: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "20px"
}

const sizeItens: React.CSSProperties = {
  width: "20%"
}

const Footbar = () => {

  const navigate = useNavigate();

  return (
    <Box>
      <Flex
        backgroundColor={"rgb(180, 180, 180)"}
        justifyContent={"space-between"}
        flexDir={"row"}
        as={"footer"}
        position={"fixed"}
        bottom={0}
        left={0}
        width={"100%"}
        textAlign={"center"}
      >
        <Box style={cardsSettings} onClick={() => { navigate("/home", { replace: true }) }}>
          <Image
            src={IconHome}
            style={sizeItens}
          />
          <Text bottom={0} left={0}>Home</Text>
        </Box>

        <Box style={cardsSettings}>
          <Image
            src={IconDashboard}
            style={sizeItens}
          />
          <Text>Dashboard</Text>
        </Box>

        <Box style={cardsSettings} onClick={() => { navigate("/load", { replace: true }) }}>
          <Image
            src={IconCarga}
            style={sizeItens}
          />
          <Text>Cargas</Text>
        </Box>

        <Box style={cardsSettings}>
          <Image
            src={IconMotoristas}
            style={sizeItens}
          />
          <Text>Motoristas</Text>
        </Box>

        <Box style={cardsSettings}>
          <Image
            src={IconRelatorios}
            style={sizeItens}
          />
          <Text>Relatórios</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footbar;
