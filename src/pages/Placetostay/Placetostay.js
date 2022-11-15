import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import stars from "../../assets/images/stars.png";
import locate from "../../assets/images/locate.png";
import "./Placetostay";
export const Placetostay = () => {
  const photos = [
    {
      id: 1,
      url: "./images/house1.png",
    },
    {
      id: 2,
      url: "./images/house2.png",
    },
    {
      id: 3,
      url: "./images/house3.png",
    },
    {
      id: 4,
      url: "./images/house4.png",
    },
    {
      id: 5,
      url: "./images/house5.png",
    },
    {
      id: 6,
      url: "./images/house6.png",
    },
    {
      id: 7,
      url: "./images/house7.png",
    },
    {
      id: 8,
      url: "./images/house8.png",
    },
    {
      id: 9,
      url: "./images/house9.png",
    },
    {
      id: 10,
      url: "./images/house10.png",
    },
    {
      id: 11,
      url: "./images/house11.png",
    },
    {
      id: 12,
      url: "./images/house12.png",
    },
    {
      id: 13,
      url: "./images/house13.png",
    },
    {
      id: 14,
      url: "./images/house14.png",
    },
    {
      id: 15,
      url: "./images/house15.png",
    },
    {
      id: 16,
      url: "./images/house16.png",
    },
  ];
  return (
    <Flex direction="column" className="place">
      <Flex
        direction="row"
        maxW="1400px"
        fontFamily="redrose"
        fontSize={{ base: "14px", lg: "20px" }}
        fontWeight="400"
        color="#434343"
        lineHeight="25px"
        columnGap={{ base: "10px", lg: "50px" }}
        rowGap="20px"
        px={{ base: "20px", lg: "100px" }}
        mt={{ base: "30px", lg: "115px" }}
        mb={{ base: "30px", lg: "80px" }}
        flexWrap="wrap"
      >
        <Text>Resturant</Text>
        <Text>Cottage</Text> <Text>Castle</Text> <Text>fantast city</Text>{" "}
        <Text>beach</Text> <Text>Carbins</Text>
        <Text>Off-grid</Text> <Text>Farm</Text>
        <Image
          src={locate}
          mt={{ base: 1, lg: -4 }}
          h={{ base: "20px", lg: "48px" }}
          w={{ base: "70px", lg: "161px" }}
        />
      </Flex>
      <Flex
        direction="row"
        rowGap="24px"
        columnGap="24px"
        flexWrap="wrap"
        justify="center"
        px={{ base: "20px", lg: "100px" }}
        pb="20px"
      >
        {photos.map((photo) => {
          const { id, url } = photo;
          return (
            <>
              <Flex
                w="292px"
                h="372px"
                direction="column"
                p="16px"
                border=" 1px solid #D7D7D7"
                borderRadius="15px"
                fontSize="12px"
                fontWeight="400px"
                lineHeight="13px"
                fontFamily="redrose"
                color="#434343"
                rowGap="16px"
              >
                <Image src={url} />
                <Flex direction="row" justify="space-between">
                  <VStack maxW="95px" alignItems="flex-start">
                    <Text>Desert King</Text>
                    <Text>2345km away</Text>
                    <Image src={stars} />
                  </VStack>
                  <VStack maxW="148px" justify="right">
                    <Text alignItems="flex-end" fontWeight="700">
                      1MBT per night
                    </Text>
                    <Text>available for 2weeks stay</Text>
                  </VStack>
                </Flex>{" "}
              </Flex>
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};
