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

const NavBar = (): React.ReactElement => {
    return (
        <Box width="100%" position="fixed" top="0px" height="110px"
        > 
            <Flex width="100%" flexDirection="row" px="80px" pt="30px" pb="15px">
                <Link><Heading color="whiteAlpha.900">LS</Heading></Link>
                <Spacer />
                <Flex mt={2} width="60%" flexDirection="row" justifyContent="flex-end">
                    <Link><Text fontWeight="bold" color="whiteAlpha.900">Home</Text></Link>
                    <Spacer />
                    <Link><Text fontWeight="bold" color="whiteAlpha.900">About</Text></Link>
                    <Spacer />
                    <Link><Text fontWeight="bold" color="whiteAlpha.900">Projects</Text></Link>
                    <Spacer />
                    <Link><Text fontWeight="bold" color="whiteAlpha.900">Experience</Text></Link>
                    <Spacer />
                    <Link><Text fontWeight="bold" color="whiteAlpha.900">Contact</Text></Link>
                    <Spacer />
                    <Link><Text fontWeight="bold" color="whiteAlpha.900">Resume</Text></Link>
                </Flex>
            </Flex>
            <Box justifyContent="center" px="81px"> 
                <Divider />
            </Box>
        </Box>  
    )
}

export default NavBar;