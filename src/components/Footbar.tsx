import { Box, Flex, Image, Text } from "@chakra-ui/react";
import IconHome from "../imgs/icons/footnav/home.png"
import IconDashboard from "../imgs/icons/footnav/dashboard.png"
import IconCarga from "../imgs/icons/footnav/cargas.png"
import IconMotoristas from "../imgs/icons/footnav/motoristas.png"
import IconRelatorios from "../imgs/icons/footnav/relatórios.png"

const Footbar = () => {
  return (
    <Box>
      <Flex
       backgroundColor={"rgb(180, 180, 180)"}
        justifyContent={"center"}
        flexDir={"row"}
        gap={"15%"}
        as={"footer"}
        position={"fixed"}
        bottom={0}
        left={0}
        width={"100%"}
        textAlign={"center"}

      >
        <Box alignItems={"center"}>
          <Image
            src={IconHome}
            width={"70%"}
          />
          <Text>Home</Text>
        </Box>

        <Box>
          <Image
            src={IconDashboard}
            width={"70%"}
          />
          <Text>Dashboard</Text>
        </Box>

        <Box>
          <Image
            src={IconCarga}
            width={"70%"}
          />
          <Text>Cargas</Text>
        </Box>

        <Box>
          <Image
            src={IconMotoristas}
            width={"70%"}
          />
          <Text>Motoristas</Text>
        </Box>

        <Box>
          <Image
            src={IconRelatorios}
            width={"70%"}
          />
          <Text>Relatórios</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footbar;
