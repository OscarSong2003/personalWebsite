import React from "react";
import {
    Flex,
    Text,
    Heading,
    IconButton,
    Box,
    Button,
    Spacer
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'


const Home = (): React.ReactElement => {
    return (
        <Flex direction="column" justifyContent="center" alignItems="center"
        width="100%" height="900px">
            <Text mt="100px" color="whiteAlpha.900" fontSize="3xl"
            letterSpacing="5px">Hello there! My name is</Text>
            <Heading color="whiteAlpha.900" my={7} size="4xl">Linfeng</Heading>
            <Heading color="whiteAlpha.900" size="4xl">Song</Heading>
            <Text mt="50px" color="whiteAlpha.900" fontSize="23px" width="700px" textAlign="center">
                I study <b>Computer Science</b> at the <b>University of Michigan</b>, Ann Arbor.
                I love building, learning, and working with technologies! My interests 
                include <b>Software Engineering</b>, <b>Machine Learning</b>, and <b>Data Science</b>. 
            </Text>
            <Flex direction="row" width="28%" justifyContent="center" alignItems="center" my={9}>
                <Button leftIcon={<FaLinkedin fontSize="20px" />}>
                    LinkedIn
                </Button>
                <Spacer />
                <Button leftIcon={<FaGithub fontSize="20px" />}>
                    Github
                </Button>
                <Spacer />
                <Button leftIcon={<HiOutlineMailOpen fontSize="20px" />}>
                    Email
                </Button>

                
                
            </Flex>
        </Flex>
    )
}

export default Home; 