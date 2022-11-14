import React from "react";
import { useRef } from "react";
import {
  // Box,
  DrawerCloseButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Button } from "../Buttons/index";
import "./Navbar.css";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Show,
} from "@chakra-ui/react";
export const Navbar = ({ text }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <div className="navbar">
      <Show breakpoint="(min-width: 769px)">
        <div className="navbar_item">
          <Link to="/">
            <img
              alt=""
              src={logo}
              className="h-auto w-auto cursor-pointer logo"
            />
          </Link>

          <Flex
            direction="row"
            columnGap="48px"
            fontWeight="400"
            fontSize="20px"
            lineHeight="25px"
            color=" #434343"
          >
            <Text>Home</Text>
            <Text>Place to stay</Text>
            <Text>NFTs</Text>
            <Text>Community</Text>
          </Flex>

          <Button mt={-4} variant="primary" text="Connect wallet" />
        </div>
      </Show>
      <Show breakpoint="(max-width: 768px)">
        <div className="navbar_item">
          <Link to="/">
            <img
              alt=""
              src={logo}
              className="h-auto w-auto cursor-pointer logo"
            />
          </Link>
          <HiOutlineBars3BottomRight
            color="#ffffff"
            size={35}
            ref={btnRef}
            onClick={onOpen}
            className="menu"
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            bg="#1d1d5a"
          >
            <DrawerOverlay />
            <DrawerContent background="#060623">
              <DrawerCloseButton color="#ffffff" size={35} />

              <DrawerBody className="menuSm"></DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </Show>
    </div>
  );
};
