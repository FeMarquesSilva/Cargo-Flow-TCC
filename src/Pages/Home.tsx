import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Footbar from "../components/Footbar";
import ImageBackground from "../imgs/background/home.png"
import Header from "../components/Header";

const styleCard: React.CSSProperties = {
    backgroundColor: "white",
    position: "relative",
    width: "100%",
    padding: "30px",
    borderRadius: "15px"
}

const Home = () => {
    return (
        <Box>

            <Header title="Home"/>

            {/* Componente responsavel pelo background */}
            <Box
                bgImage={`url(${ImageBackground})`}
                position={"fixed"}
                width={"100%"}
                height={"100%"}
                bgSize={"cover"}
                backgroundPosition={"center"}
                opacity={"26%"}
                marginTop={-40}
            />

            {/* Componente de boas vindas */}
            <Flex flexDir={"column"} textAlign={"center"} gap={2} marginTop={40} >
                <Text fontSize={24}>Bem-vindo ao Cargo Flow</Text>
                <Text>Sua plataforma completa de gestão de transportes terceirizados</Text>
            </Flex>


            {/* Componente dos recursos principais */}

            <Text marginTop={"200px"} marginBottom={"25px"}>Recursos Principais</Text>

            <Grid templateColumns={"repeat(3, 1fr)"} gap={4} p={5} justifyItems={"center"}>

                <Box style={styleCard}>
                    <Text>Análise de Custos</Text>
                </Box>

                <Box style={styleCard}>
                    <Text></Text>
                </Box>

                <Box style={styleCard}>
                    <Text>Notificações Automáticas</Text>
                </Box>

                <Box style={styleCard}>
                    <Text>Relatórios Detalhados</Text>
                </Box>

                <Box style={styleCard}>
                    <Text></Text>
                </Box>

                <Box style={styleCard}>
                    <Text></Text>
                </Box>

            </Grid>

            {/* Componente do suporte */}

            <Flex justifyContent={"center"} marginTop={"25px"} margin={"20px"}>
                <Box style={styleCard}>
                    <Flex flexDir={"column"}>
                        <Text>Precisa de ajuda?</Text>
                        <Text>Nossa equipe está pronta para te atender</Text>
                    </Flex>
                </Box>
            </Flex>

            <Footbar />
        </Box>
    );
}

export default Home;