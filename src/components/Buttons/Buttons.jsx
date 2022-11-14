import {
  useToken,
  useColorModeValue,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const sharedProps = {
  mt: 4,
  py: 6,
  h: "48px",
  px: 10,
  w: "100%",
  maxW: 391,
  fontWeight: 600,
  fontSize: "16px",
  borderRadius: "10px",
  _active: {
    opacity: 0.8,
  },
};

export const Button = ({ text, variant, children, ...rest }) => {
  const [gray500] = useToken("colors", ["gray.600", "gray.500"]);
  const secondaryHoverBorder = useColorModeValue("0", `1px solid ${gray500}`);
  switch (variant) {
    case "primary":
      return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ChakraButton
            {...sharedProps}
            w="170px"
            fontSize="16px"
            fontWeight="600"
            borderRadius="10px"
            lineHeight="20px"
            h="48px"
            mt={0}
            // backgroundColor="#171717"
            background=" linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
            color="#ffffff"
            fontFamily="redrose"
            letterSpacing="0.7px"
            _hover={{
              shadow: "lg",
            }}
            {...rest}
          >
            {text ? text : children}
          </ChakraButton>
        </motion.button>
      );

    case "secondary":
      return (
        <ChakraButton
          {...sharedProps}
          w={{ base: "111px", lg: "212px" }}
          fontSize={{ base: "14px", lg: "20px" }}
          fontWeight={{ base: "600", lg: "700" }}
          borderRadius="12px"
          h={{ base: "32px", lg: "66px" }}
          mt={0}
          padding="16px 0px"
          background="transparent"
          color="rgba(255, 255, 255, 0.5)"
          fontFamily={{ base: "proximanova", lg: "syne_bold" }}
          letterSpacing="0.7px"
          border="1px solid #ffffff"
          _hover={{
            shadow: "md",
            border: secondaryHoverBorder,
          }}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {text ? text : children}
          </motion.button>
        </ChakraButton>
      );

    default:
      return (
        <ChakraButton
          {...sharedProps}
          color="white"
          bg="#191919"
          w="160px"
          borderRadius={12}
          _hover={{
            shadow: "md",
            border: secondaryHoverBorder,
          }}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {text ? text : children}
          </motion.button>
        </ChakraButton>
      );
  }
};
