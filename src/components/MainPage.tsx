import React, { useState, useEffect } from "react";
import NavBar from "./common/NavBar";
import { Box, Flex, Text, Link, Button, Spacer, Heading } from "@chakra-ui/react";
import LayoutPage from "./common/LayoutPage";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Activities from "./Activities";
import ReachOut from "./ReachOut";
import Footer from "./common/Footer";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'

const MainPage = (): React.ReactElement => {
    const [ windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [ windowHeight, setWindowHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    if (windowWidth < 1050 || windowHeight < 600) {
        return (
            <LayoutPage>
                <NavBar />
                <Flex id="home" direction="column" justifyContent="center" alignItems="center"
                width="100%" height="1200px">
                <Text mt="200px" color="whiteAlpha.900" fontSize="3xl"
                letterSpacing="5px" width="100vw" textAlign="center">Hello there! My name is</Text>
                <Heading className="animate-character" color="whiteAlpha.900" my={7} size="4xl">Linfeng</Heading>
                <Heading className="animate-character" color="whiteAlpha.900" size="4xl">Song</Heading>
                <Text mt="50px" color="whiteAlpha.900" fontSize="23px" width="-moz-fit-content" textAlign="center">
                    I study <b>Computer Science</b> at the <b>University of Michigan</b>, Ann Arbor.
                    I love building, learning, and working with technologies! For a complete view of my 
                    site please use a Desktop/Computer/Tablet!
                </Text>
            <Flex direction="column" width="80%" justifyContent="center" alignItems="center" my={9}>
                <Link mt={5} target="_blank" href="https://www.linkedin.com/in/linfeng-oscar-song/">
                    <Button leftIcon={<FaLinkedin fontSize="20px" />}>
                        LinkedIn
                    </Button>
                </Link>
                <Spacer />
                <Link mt={6} target="_blank" href="https://github.com/OscarSong2003">
                    <Button leftIcon={<FaGithub fontSize="20px" />}>
                        Github
                    </Button>
                </Link>
                <Spacer />
                <Link mt={6} href="mailto: osong@umich.edu">
                    <Button leftIcon={<HiOutlineMailOpen fontSize="20px" />}>
                        Email
                    </Button>
                </Link>
                </Flex>
            </Flex>
            <Footer />
            </LayoutPage>
        )
    }

    return (
        
        <LayoutPage>
            <NavBar />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Activities />
            <ReachOut />
            <Footer />
        </LayoutPage>
    )
}

export default MainPage; 