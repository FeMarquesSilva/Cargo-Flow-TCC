import { Box, Flex, Text } from "@chakra-ui/react";

const Footbar = () => {
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        flexDir={"row"}
        gap={"200px"}
        as={"footer"}
        position={"fixed"}
        bottom={0}
        left={0}
        width={"100%"}
      >
        <Box>
          <Text>Home</Text>
        </Box>

        <Box>
          <Text>Dashboard</Text>
        </Box>

        <Box>
          <Text>Cargas</Text>
        </Box>

        <Box>
          <Text>Motoristas</Text>
        </Box>

        <Box>
          <Text>Relatórios</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footbar;
