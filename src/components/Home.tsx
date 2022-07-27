import React from "react";
import {
    Flex,
    Text,
    Heading,
    IconButton,
    Box,
    Button,
    Spacer,
    Link
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'

const Home = (): React.ReactElement => {
    return (
        <Flex id="home" direction="column" justifyContent="center" alignItems="center"
        width="100%" height="900px">
            <Text mt="50px" color="whiteAlpha.900" fontSize="3xl"
            letterSpacing="5px">Hello there! My name is</Text>
            <Heading className="animate-character" color="whiteAlpha.900" my={7} size="4xl">Linfeng</Heading>
            <Heading className="animate-character" color="whiteAlpha.900" size="4xl">Song</Heading>
            <Text mt="50px" color="whiteAlpha.900" fontSize="23px" width="700px" textAlign="center">
                I study <b>Computer Science</b> at the <b>University of Michigan</b>, Ann Arbor.
                I love building, learning, and working with technologies! My interests 
                include <b>Software Engineering</b>, <b>Machine Learning</b>, and <b>Data Science</b>. 
            </Text>
            <Flex direction="row" width="28%" justifyContent="center" alignItems="center" my={9}>
                <Link target="_blank" href="https://www.linkedin.com/in/linfeng-oscar-song/">
                    <Button leftIcon={<FaLinkedin fontSize="20px" />}>
                        LinkedIn
                    </Button>
                </Link>
                
                <Spacer />
                
                <Link target="_blank" href="https://github.com/OscarSong2003">
                    <Button leftIcon={<FaGithub fontSize="20px" />}>
                        Github
                    </Button>
                </Link>
                
                <Spacer />
                
                <Link href="mailto: osong@umich.edu">
                    <Button leftIcon={<HiOutlineMailOpen fontSize="20px" />}>
                        Email
                    </Button>
                </Link>
                

                
            </Flex>
        </Flex>
    )
}

export default Home; 