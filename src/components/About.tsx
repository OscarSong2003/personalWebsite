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

const About = (): React.ReactElement => {
    return (
        <Flex id="about" direction="column" justifyContent="center" alignItems="center"
        width="100%" height="900px">
            <Heading color="whiteAlpha.900" className="animate-character2">About Me</Heading>
            <Flex direction="row" width="60%" mt="65px">
                <Box width="57%" borderLeft="2px" borderLeftWidth="2px" pl={5} borderColor="whiteAlpha.700">
                    <Text color="whiteAlpha.900" fontSize="20px">Hey! My name is Linfeng Song, 
                    but I also go by Oscar as well.
                    I am currently pursuing a B.S. in Computer Science at the 
                    University of Michigan. </Text>
                    <Text my="20px" color="whiteAlpha.900" fontSize="20px">With a passion in 
                    Software Development and Machine Learning, I am
                    currently a student researcher at the Michigan Human-AI Lab.</Text>
                    <Text my="20px" color="whiteAlpha.900" fontSize="20px">
                    I have experience with full-stack development, and have worked with the following languages and technologies: 
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
                            <Text color="whiteAlpha.900" fontSize="20px">Express</Text>
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
                <Box width="356px" ml="50px" height="460px" borderColor="whiteAlpha.600" borderWidth="5px" shadow="md">
                    <Image height="450px" width="350px" src='/images/profilePic.png' alt='Linfeng Song' />
                </Box>
            </Flex>
        </Flex>
    )

}

export default About; 