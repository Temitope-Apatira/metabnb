import {
  useToken,
  useColorModeValue,
  Button as ChakraButton,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  Modal,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import metahead from "../../assets/images/metahead.png";
import openseahead from "../../assets/images/openseahead.png";
import go from "../../assets/images/go.png";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  switch (variant) {
    case "primary":
      return (
        <>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ChakraButton
              {...sharedProps}
              w={{ base: "100px", lg: "170px" }}
              fontSize="16px"
              fontWeight="600"
              borderRadius="10px"
              lineHeight="20px"
              h={{ base: "38px", lg: "48px" }}
              mt={0}
              onClick={onOpen}
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
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              maxW={{ base: "350px", lg: "600px" }}
              minH={{ base: "340px", lg: "326px" }}
              h="fit-content"
              borderRadius="16px"
            >
              <ModalHeader
                fontFamily="redrose"
                fontWeight="700"
                fontSize="24px"
                lineHeight="30px"
                color="#333333"
                minH="78px"
                borderBottom="1px solid #cfd8dc"
              >
                Connect Wallet
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex direction="column" rowGap="15px">
                  <Text
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="20px"
                    pb="16px"
                  >
                    Choose your preferred wallet:
                  </Text>
                  <Flex
                    direction="row"
                    justify="space-between"
                    minH={{ base: "50px", lg: "68px" }}
                    maxW={{ base: "290px", lg: "536px" }}
                    border="1px solid #CFD8DC"
                    borderRadius=" 12px"
                    background="#f8f9fa"
                    p="12px 20px"
                  >
                    <Image src={metahead} />
                    <Image src={go} h="20px" w="20px" mt="10px" />
                  </Flex>
                  <Flex
                    direction="row"
                    justify="space-between"
                    minH={{ base: "50px", lg: "68px" }}
                    maxW={{ base: "290px", lg: "536px" }}
                    border="1px solid #CFD8DC"
                    borderRadius=" 12px"
                    background="#ffffff"
                    p="12px 20px"
                  >
                    <Image src={openseahead} />
                    <Image src={go} h="20px" w="20px" mt="10px" />
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
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
