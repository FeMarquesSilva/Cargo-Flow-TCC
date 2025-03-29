import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footbar from "../components/Footbar";
import CustomButton from "../components/button";

const backgroundFilters: React.CSSProperties = {
    backgroundColor: "rgb(161, 161, 161)",
    padding: "2px"
}

const Load = () => {
    return (
        <Box backgroundColor={"rgb(202, 202, 202)"} minH={"100vh"}>

            <Header title="Cargas" />

            {/* Componente do cabeçalho com filtros */}
            
            <Flex 
                position="fixed" 
                top="10" 
                left="0" 
                width="100%" 
                backgroundColor="white" 
                zIndex="1000" 
                p="20px" 
                justifyContent="space-between" 
                align="center"
            >

                <Flex p={"15px"} backgroundColor={"white"} flexDir={"column"} gap={2} borderRadius={"15px"}>

                    <Flex gap={10}>
                        <Text style={backgroundFilters}>Filtros</Text>
                        <Text style={backgroundFilters}>Adicionar Cargas</Text>
                    </Flex>

                    <Flex gap={10}>
                        <Text style={backgroundFilters}>(Status Carga)</Text>
                        <Text style={backgroundFilters}>(Remetente de Embarque)</Text>
                        <Text style={backgroundFilters}>(Data de Embarque)</Text>
                        <Text style={backgroundFilters}>(Nome Motorista)</Text>
                    </Flex>

                </Flex>
                
                <CustomButton
                    label="Solicitar confirmação de entrega"
                />

            </Flex>

            <Footbar />

        </Box>
    );
}

export default Load;