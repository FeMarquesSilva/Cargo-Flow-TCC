import { Box, Text } from "@chakra-ui/react";
import Footbar from "../components/Footbar";

const Home = () => {
    return (
        <Box>   
            <Text>Bem-vindo ao Cargo Flow</Text>
            <Text>Sua plataforma completa de gestão de transportes terceirizados</Text>

            <Footbar/>
        </Box>
    );
}

export default Home;