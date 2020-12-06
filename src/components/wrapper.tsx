import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
  variant?: "regular" | "small";
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      mx="auto"
      mt={8}
    >
      {children}
    </Box>
  );
};
export default Wrapper;
