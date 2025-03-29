import { Box, Flex, Text } from "@chakra-ui/react";
import { HeaderProps } from "@chakra-ui/react/dist/types/components/card/namespace";

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <Box 
        zIndex={1} 
        position={"fixed"} 
        background={"white"} 
        width={"100%"}
        top={0}
        >
            <Box>
                <Text color={"black"}>{title}</Text>
            </Box>
        </Box>
    );
}

export default Header;