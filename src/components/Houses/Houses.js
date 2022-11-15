import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import stars from "../../assets/images/stars.png";
import React from "react";
import "./Houses.css";

export const Houses = () => {
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
  ];

  return (
    <Flex
      direction="row"
      rowGap="24px"
      columnGap="24px"
      flexWrap="wrap"
      justify="center"
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
  );
};
