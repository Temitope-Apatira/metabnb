import { Flex, Image, Text } from "@chakra-ui/react";
import footerlogo from "../../assets/images/metafooter.svg";
import face from "../../assets/images/face.png";
import twit from "../../assets/images/twit.png";
import insta from "../../assets/images/insta.png";
import "./Footer.css";
import React from "react";
export const Footer = () => {
  return (
    <div className="footer">
      <Flex
        maxW="1440px"
        w="100%"
        h="fit-content"
        minH="322px"
        bg="#1d1d1e"
        direction={{ base: "column", md: "row" }}
        color="#ffffff"
        justify={{ base: "left", lg: "space-around" }}
        pt="63px"
        px={{ base: "25px", lg: "0px" }}
        fontSize="14px"
        rowGap="20px"
      >
        <Flex direction="column" maxW="250px">
          <Image src={footerlogo} mb="96px" w="233px" h="40px" />
          <Flex direction="row" columnGap="32px" mb="56px">
            <Image src={face} />
            <Image src={insta} />
            <Image src={twit} />
          </Flex>
        </Flex>
        <Flex direction="column" maxW="150px" rowGap="16px">
          <Text pb="7px" fontSize="18px" fontWeight="700">
            Community
          </Text>{" "}
          <Text>NFT</Text> <Text>Tokens</Text> <Text>Landlords</Text>{" "}
          <Text>Discard</Text>
        </Flex>
        <Flex direction="column" maxW="150px" rowGap="16px">
          <Text pb="7px" fontSize="18px" fontWeight="700">
            Places
          </Text>{" "}
          <Text>Castle</Text> <Text>Farms</Text> <Text>Beach</Text>{" "}
          <Text>Learn more</Text>
        </Flex>
        <Flex direction="column" maxW="150px" rowGap="16px">
          <Text pb="7px" fontSize="18px" fontWeight="700">
            About us
          </Text>{" "}
          <Text>Road map</Text> <Text>Creators</Text> <Text>Career</Text>{" "}
          <Text>Contact us</Text>
        </Flex>
      </Flex>

      <Text
        fontSize="16px"
        px={{ base: "20px", lg: "100px" }}
        color="#ffffff"
        mt={{ base: "20px", lg: "0px" }}
        pb="20px"
      >
        &copy; 2022 Metabnb
      </Text>
    </div>
  );
};
