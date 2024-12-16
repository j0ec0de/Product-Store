import React from 'react'
import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const cartIconcolor = useColorModeValue("black","white");
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16} 
        alignItems={"center"} 
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
        }}
      >
        <Flex alignItems={"center"} gap={2}>
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            <Link to={"/"}>Product Store</Link>
          </Text>
          <FaCartPlus fontSize={25} color={cartIconcolor} />
        </Flex>

        <HStack spacing={4} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus  fontSize={20} />
            </Button>
          </Link>
            <Button onClick={toggleColorMode} ml={2}>
              {colorMode === "dark" ? <IoSunny size="20" /> : <IoMoon size="20" />}
            </Button>
          
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;