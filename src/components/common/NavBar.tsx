import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { 
    Box, 
    Flex, 
    Link, 
    Heading, 
    Spacer, 
    Text,
    Divider
} from "@chakra-ui/react";

const toggle = true; 
const NavBar = (): React.ReactElement => {


    return (
        <Box width="100%" position="fixed" top="0px" height="100px" zIndex="overlay">
            <Flex bg="blackAlpha.600" width="100%" flexDirection="row" px="80px" pt="20px" pb="15px">
                <Link href="#home"><Heading color="whiteAlpha.900">LS</Heading></Link>
                <Spacer />
                <Flex mt={2} width="60%" flexDirection={{base: "column", md: "row", lg: "row"}} justifyContent="flex-end">
                    <Link href="#home"><Text fontWeight="bold" color="whiteAlpha.900">Home</Text></Link>
                    <Spacer />
                    <Link href="#about"><Text fontWeight="bold" color="whiteAlpha.900">About</Text></Link>
                    <Spacer />
                    <Link href="#experience"><Text fontWeight="bold" color="whiteAlpha.900">Experience</Text></Link>
                    <Spacer />
                    <Link href="#projects"><Text fontWeight="bold" color="whiteAlpha.900">Projects</Text></Link>
                    <Spacer />
                    <Link href="#activities"><Text fontWeight="bold" color="whiteAlpha.900">Activities</Text></Link>
                    <Spacer />
                    <Link href="#reachOut"><Text fontWeight="bold" color="whiteAlpha.900">Contact</Text></Link>
                </Flex>
            </Flex>
            <Box justifyContent="center" px="81px"> 
                <Divider />
            </Box>
        </Box>  
    )
}

export default NavBar;