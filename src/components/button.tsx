import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

// Props personalizadas para o botão (Onde será erdados as propriedades de ButtonsProps do chakra)
interface CustomButtonProps extends ButtonProps {
  label: string; // Texto do botão
}

// Componente de botão personalizado especificando ser de react e aceitando as propriedades de (CustomButtonProps) definida anteriormente.
const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button
      borderRadius="20px"
      {...props} // Permite sobrescrever estilos ou adicionar outros atributos
    >
      {label}
    </Button>
  );
};

export default CustomButton;
