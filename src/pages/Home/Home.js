import React, { useRef } from "react";
import { Flex, Image, Input, Show, Text } from "@chakra-ui/react";
import { Button } from "../../components/Buttons";
import section1 from "../../assets/images/section1.png";
import section3 from "../../assets/images/section3.png";
import opensea from "../../assets/images/opensea.svg";
import fox from "../../assets/images/fox.svg";
import mbtoken from "../../assets/images/mbtoken.svg";

import "./Home.css";
export const Home = () => {
  return (
    <div className="home">
      <Flex
        direction="row"
        justify={{ base: "center", lg: "space-between" }}
        flexWrap="wrap"
        px={{ base: "20px", lg: "100px" }}
        mt={{ base: "30px", lg: "138px" }}
      >
        <Show breakpoint="(max-width:768px)">
          <Flex>
            <Image src={section1} w="300px" h="340px" />
          </Flex>
        </Show>
        <Flex
          direction="column"
          minH="148px"
          h="fit-content"
          maxW="646px"
          w="100%"
          rowGap={{ base: "20px", lg: "48px" }}
        >
          <p className="section1">
            Rent a <span className="color_">Place</span> away from
            <span className="color_"> Home</span> in the
            <span className="color_"> Metaverse</span>
          </p>
          <Text
            fontSize={{ base: "16px", lg: "24px" }}
            lineHeight="35px"
            color="#434343"
            maxW="636px"
          >
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </Text>
          <Flex>
            <Input
              background="rgba(247, 247, 247, 0.1)"
              border="1px solid #a3a3a3"
              borderRadius="8px 0px 0px 8px"
              maxW="390px"
              h="54px"
              placeholder="Search for location"
              fontSize="14px"
              color="#b8b8b8"
            />{" "}
            <Button
              variant="primary"
              text="Search"
              borderRadius="0px 8px 8px 0px"
            />
          </Flex>
        </Flex>
        <Show breakpoint="(min-width:769px)">
          <Flex>
            <Image src={section1} w="446px" h="459px" />
          </Flex>
        </Show>
      </Flex>
      <Flex
        m="0 auto"
        direction="row"
        maxW="1440px"
        minH={{ base: "50px", lg: "70px" }}
        h="fit-content"
        justify="space-between"
        p={{ base: "5px 20px", lg: "10px 100px" }}
        background="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
        mt="67px"
      >
        <Image
          src={fox}
          h={{ base: "30px", lg: "40px" }}
          w={{ base: "90px", lg: "200px" }}
        />
        <Image
          src={mbtoken}
          h={{ base: "30px", lg: "40px" }}
          w={{ base: "90px", lg: "200px" }}
        />
        <Image
          src={opensea}
          h={{ base: "30px", lg: "40px" }}
          w={{ base: "90px", lg: "200px" }}
        />
      </Flex>
      <Flex
        direction="column"
        justify={{ base: "center", lg: "space-between" }}
        flexWrap="wrap"
        px={{ base: "20px", lg: "100px" }}
        background="#ffffff"
        minH="963px"
        h="fit-content"
        align="center"
      >
        <Text
          maxW="817px"
          color="#000000"
          fontSize="48px"
          lineHeight="60px"
          fontWeight="700"
          mt={{ base: "38px", lg: "58px" }}
        >
          Inspiration for your next adventure
        </Text>
      </Flex>
      <Flex
        direction="row"
        justify={{ base: "center", lg: "space-between" }}
        flexWrap="wrap"
        px={{ base: "20px", lg: "100px" }}
        background="#a02279"
        minH="774px"
        h="fit-content"
        align="center"
      >
        <Show breakpoint="(max-width:768px)">
          <Flex>
            <Image src={section3} w="320px" h="340px" />
          </Flex>
        </Show>
        <Flex
          direction="column"
          minH="415px"
          h="fit-content"
          maxW="346px"
          w="100%"
          rowGap={{ base: "20px", lg: "48px" }}
        >
          <Text
            fontSize={{ base: "28px", lg: "48px" }}
            lineHeight="60px"
            color="#ffffff"
            fontWeight="700"
            maxW="415px"
          >
            Metabnb NFTs
          </Text>
          <Text
            fontSize={{ base: "14px", lg: "18px" }}
            lineHeight="35px"
            color="#ffffff"
            maxW="415px"
          >
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </Text>
          <Flex>
            <Button
              variant="primary"
              text="Search"
              color="#a02279"
              background="#ffffff"
            />
          </Flex>
        </Flex>
        <Show breakpoint="(min-width:769px)">
          <Flex>
            <Image src={section3} w="704px" h="575px" />
          </Flex>
        </Show>
      </Flex>
    </div>
  );
};
