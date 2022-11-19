import React from "react";
import {
  Heading,
  Flex,
  Button
} from "@chakra-ui/react";
import bckg from '../img/bckg.jpg'
// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = () => {

  return (
    <Flex
      as="nav"
      align="center"
      justify={{ lg: "center", md: "center", sm: "center", base: "center" }}
      wrap="wrap"
      direction={"column"}
      experimental_spaceY={{  lg:6, md:5, sm:5, base:5 }}
      padding={6}
      bgImage={bckg}
      height={80}
      backgroundPosition={{ xl:'center', lg: "left", md: "left", sm: "left", base: "left" }}
      backgroundSize={"1600px 320px"}
      backgroundRepeat="no-repeat"
      color="white"
    >
      <Flex align="center">
        <Heading as="h3" size="md" letterSpacing={"widest"} fontWeight={"light"}>
          DOMINA EL TERRENO
        </Heading>
      </Flex>

      <Flex
        direction={{ lg: 'row', md: 'column', sm: 'column', base: 'column' }}
        experimental_spaceX={{ lg: 5, md:0, sm:0 }}

        >
        
        <Button
          width={{ lg:36, md:"96", sm:"96", base:72 }}
          mb={{ base: 5, md:5, sm:5 }}
          variant="outline" 
          _hover={{ bg: "whiteAlpha.900", borderColor: "whiteAlpha.900", color:'yellow.300' }}
        >
          VER DETALLES
        </Button>
        <Button
          width={{ lg:36, md:"96", sm:"96", base:"72" }}
          variant="outline"
          _hover={{ bg: "whiteAlpha.900", borderColor: "whiteAlpha.900", color:'yellow.300'}}
        >
          VER VIDEO
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;