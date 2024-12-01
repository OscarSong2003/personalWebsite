import React from "react";
import {
    Flex,
    Heading,
    Box,
    Text,
    SimpleGrid,
    Icon,
    Button,
    Image
}
from "@chakra-ui/react";
import { BiCheckboxChecked } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaExternalLinkAlt } from "react-icons/fa";

const About = (): React.ReactElement => {
    return (
        <Flex id="about" direction="column" justifyContent="center" alignItems="center"
        width="100%" height="900px">
            <Heading color="whiteAlpha.900" fontSize="5xl" className="animate-character2">About Me</Heading>
            <Flex direction="row" width="60%" mt="65px">
                <Box width="57%" borderLeft="2px" borderLeftWidth="2px" pl={5} borderColor="whiteAlpha.700">
                    <Text color="whiteAlpha.900" fontSize="20px">Hey! My name is Linfeng Song, 
                    but I also go by Oscar as well.
                    I am a Masters Student in Computer and Information Science @ the University of Pennsylvania.
                    Previously, I completed a B.S. in Computer Science with Honors at the 
                    University of Michigan. </Text>
                    <Text my="20px" color="whiteAlpha.900" fontSize="20px">With a passion in 
                    Software Development and Machine Learning, I'm an Ex-Amazon Intern and student researcher at the Michigan Human-AI Lab.</Text>
                    <Text my="20px" color="whiteAlpha.900" fontSize="20px">
                    I have experience with full-stack development, and am most adept working with the following languages and technologies: 
                    </Text>
                    <SimpleGrid columns={3} spacing={5} alignContent="left">
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">C++/C</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">TypeScript</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">Python</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">React</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">MongoDB</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">SQL</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">Django</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">GraphQL</Text>
                        </Button>
                        <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                            <Text color="whiteAlpha.900" fontSize="20px">HTML/CSS</Text>
                        </Button>
                    </SimpleGrid>
                </Box>
                <Box width="330px" ml="50px" height="470px" marginTop="20px" borderColor="whiteAlpha.600" borderWidth="5px" shadow="md">
                    <Image height="462px" width="330px" src='/images/profilePic.png' alt='Linfeng Song' />
                </Box>
            </Flex>
        </Flex>
    )

}

export default About; 