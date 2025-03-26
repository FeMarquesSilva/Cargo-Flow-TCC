import { Box, Button, Image, Text } from "@chakra-ui/react";
import buttonReturn from "../../imgs/icons/voltar.png"
import { useNavigate } from "react-router-dom";
import ImagemDeFundo from "../../imgs/background/auth.png";

const Login = () => {

  const navegate = useNavigate()

  return (
    <Box>
      <Box
        position={"absolute"}
        bgImage={`url(${ImagemDeFundo})`}
        bgSize={"cover"}
        backgroundPosition={"center"}
        bgRepeat={"no-repeat"}
        opacity={"26%"}
        height={"100vh"}
        width={"100%"}
      />

      <Image
        src={buttonReturn}
        alt="Botão de voltar"
        onClick={() => navegate("/")}
        width={"3%"}
        padding={2}
        position={"relative"}
      />

    </Box>
  );
};

export default Login;
