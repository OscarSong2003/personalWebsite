import React from "react";
import { 
    Flex,
    Heading,
    Center,
    Box,
    Image,
    Text,
    Button,
    Spacer,
    SimpleGrid,
    Icon,
    Link
} from "@chakra-ui/react";
import { FaGithub, FaPenFancy } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const Projects = (): React.ReactElement => {
    return (    
        <Flex mt="500px" id="projects" direction="column" width="100%" minHeight="2600px" paddingTop="150px" px="81px" alignItems="center" justifyContent="center">
            <Center width="100%"><Heading mb={5} color="whiteAlpha.900" fontSize="5xl" className="animate-character4">Personal Projects</Heading></Center>
            
            <Flex mt="80px" direction="row"  width="90%"  height="500px" borderRadius="2xl" >
                <Box width="50%" height="80%" borderRadius="2xl" pl="0px" pt="10px">
                    <Flex flexDirection="column" ml="0px" mr="40px" height="400px" px="15px" py="10px" borderRadius="2xl" borderColor="whiteAlpha.700">
                        <Text color="whiteAlpha.900" fontSize="20px" fontWeight="bold">Omniscribe Web</Text>
                        <Text color="whiteAlpha.900" fontSize="20px">Summer 2022 - Summer 2024</Text>
                        <Flex flexDirection="row" width="62%" mt={5}>
                            <Link target="_blank" href="https://youtu.be/63tZGhx5O_U">
                                <Button leftIcon={<BsYoutube />}>
                                    Video Demo
                                </Button>
                            </Link>
                            <Spacer />
                            <Link target="_blank" href="https://www.dropbox.com/scl/fi/g0j96j3nclek5bo0bz3j8/LSA-CS-Honors-Senior-Thesis-Linfeng-Song.pdf?rlkey=gifr9dztfhvckd0i68pa98pfm&st=95b28m2z&dl=0">
                                <Button  marginLeft="6px"  leftIcon={<FaPenFancy />}>
                                    Honors Thesis
                                </Button>
                            </Link>
                            <Spacer />
                            <Link target="_blank" href="https://www.youtube.com/watch?v=8fLy8r7CdpE">
                                <Button marginLeft="6px" leftIcon={<FaPenFancy />}>
                                    Presentation
                                </Button>
                            </Link>
                        </Flex>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            A 360° video viewing web interface for Blind and Visually Impaired individuals to navigate
                            panorama videos, integrating AI and HCI functionalities including object, scene, and spatial audio descriptions.
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            Awarded honors degree with senior honors thesis focused on the creation of Omniscribe Web leveraging Generative AI.
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            I primarily used the following technologies:  
                        </Text>
                        <SimpleGrid mt={3} columns={3} spacing={5} alignContent="left">
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Panolens.js</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Google Cloud</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Text to Speech</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Python</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Firebase</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Typescript React</Text>
                            </Button>
                        </SimpleGrid>
                    </Flex>
                </Box>
                <Box width="50%" height="80%" borderWidth="2px" ml="30px" borderRadius="2xl">
                    <Center width="100%" height="100%">
                        {/* <Box borderRadius="2xl" as="iframe" src="https://www.youtube.com/embed/JEENmXVHiu4" allowFullScreen width="97%" height="96%"></Box> */}
                        <Image mr="50px" mb="55px" borderRadius="2xl" height="100%" width="100%" src='/images/omniscribe.png' alt='Unex' />
                    </Center>
                </Box>
            </Flex>
            <Box mt="20px" mb="80px" width="20%" justifyContent="center" alignItems="center">
                <hr></hr>
            </Box>
            {/* unex project  */}
            <Flex direction="row"  width="90%"  height="500px" borderRadius="2xl" >
                <Box width="50%" height="80%" borderRadius="2xl" borderWidth="2px">
                    <Center width="100%" height="100%">
                        {/* <Box borderRadius="2xl" as="iframe" src="https://www.youtube.com/embed/JEENmXVHiu4" allowFullScreen width="97%" height="96%"></Box> */}
                        <Image ml="50px" mt="55px" borderRadius="2xl" height="100%" width="100%" src='/images/unex.png' alt='Unex' />
                    </Center>
                </Box>
                <Box width="50%" height="80%" borderRadius="2xl" pl="20px" pt="33px">
                    <Flex flexDirection="column" ml="50px"  height="400px" px="15px" py="10px"  borderRadius="2xl" borderColor="whiteAlpha.700">
                        <Text color="whiteAlpha.900" fontSize="20px" fontWeight="bold">Student Financial Tracker</Text>
                        <Text color="whiteAlpha.900" fontSize="20px">Winter 2021 - Summer 2022</Text>
                        <Flex flexDirection="row" width="63.6%" mt={5}>
                            <Link target="_blank" href="https://github.com/OscarSong2003/Unex">
                                <Button leftIcon={<FaGithub fontSize="20px" />}>
                                    Source Code </Button>
                            </Link>
                            <Spacer />
                            <Link target="_blank" href="https://www.youtube.com/watch?v=JEENmXVHiu4">
                                <Button leftIcon={<BsYoutube />}>
                                    Video Demo
                                </Button>
                            </Link>
                            
                        </Flex>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            A web application that empowers university students to create, view, and manage their income and expenditures
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            Easily visualize, summarize, and categorize transactions by month, type, and categories. 
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            I primarily used the following technologies:  
                        </Text>
                        <SimpleGrid mt={3} columns={3} spacing={5} alignContent="left">
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">React</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">TypeScript</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Mongo Atlas</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Express</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Auth0</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Bootstrap</Text>
                            </Button>
                        </SimpleGrid>
                    </Flex>
            
                </Box>
                
            </Flex>
            <Box mt="20px" mb="80px" width="20%" justifyContent="center" alignItems="center">
                <hr></hr>
            </Box>
        
        {/* 2nd project */}
            <Flex mt="30px" direction="row"  width="90%"  height="500px" borderRadius="2xl" >
                <Box width="50%" height="80%" borderRadius="2xl" pl="0px" pt="10px">
                    <Flex flexDirection="column" ml="0px" mr="40px" height="400px" px="15px" py="10px" borderRadius="2xl" borderColor="whiteAlpha.700">
                        <Text color="whiteAlpha.900" fontSize="20px" fontWeight="bold">Machine Learning Graphical User Interface</Text>
                        <Text color="whiteAlpha.900" fontSize="20px">Summer 2022</Text>
                        <Flex flexDirection="row" width="62%" mt={5}>
                            <Link target="_blank" href="https://github.com/OscarSong2003/ForteStaveUI">
                                <Button leftIcon={<FaGithub fontSize="20px" />}>
                                    Source Code
                                </Button>
                            </Link>
                            <Spacer />
                            <Link target="_blank" href="https://youtu.be/GvS-qwK28wo">
                                <Button leftIcon={<BsYoutube />}>
                                    Video Demo
                                </Button>
                            </Link>
                        </Flex>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            A web user interface that facilitates natural language processing, machine learning, and remote processing tasks for Forte and Stave 
                            &#40;CASL Open Source Libraries&#41;.
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            Users can input text, perform transcription editing, conduct name entity recognition, and visualize final result. 
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            I primarily used the following technologies:  
                        </Text>
                        <SimpleGrid mt={3} columns={3} spacing={5} alignContent="left">
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Python</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">React</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Forte</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Stave</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">TypeScript</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Django</Text>
                            </Button>
                        </SimpleGrid>
                    </Flex>
                </Box>
                <Box width="50%" height="80%" borderWidth="2px" ml="30px" borderRadius="2xl">
                    <Center width="100%" height="100%">
                        {/* <Box borderRadius="2xl" as="iframe" src="https://www.youtube.com/embed/JEENmXVHiu4" allowFullScreen width="97%" height="96%"></Box> */}
                        <Image mr="50px" mb="55px" borderRadius="2xl" height="100%" width="100%" src='/images/gui.png' alt='Unex' />
                    </Center>
                </Box>
            </Flex>
            <Box mt="20px" mb="80px" width="20%" justifyContent="center" alignItems="center">
                <hr></hr>
            </Box>
            {/* third project */}
            <Flex mt="20px"direction="row"  width="90%"  height="500px" borderRadius="2xl" >
                <Box width="50%" height="80%" borderRadius="2xl" borderWidth="2px">
                    <Center width="100%" height="100%">
                        {/* <Box borderRadius="2xl" as="iframe" src="https://www.youtube.com/embed/JEENmXVHiu4" allowFullScreen width="97%" height="96%"></Box> */}
                        <Image ml="50px" mt="55px" borderRadius="2xl" height="100%" width="100%" src='/images/ff.png' alt='Unex' />
                    </Center>
                </Box>
                <Box width="50%" height="80%" borderRadius="2xl" pl="20px" pt="33px">
                    <Flex flexDirection="column" ml="50px"  height="400px" px="15px" py="10px"  borderRadius="2xl" borderColor="whiteAlpha.700">
                        <Text color="whiteAlpha.900" fontSize="20px" fontWeight="bold">Function Frenzy Game</Text>
                        <Text color="whiteAlpha.900" fontSize="20px">Summer 2021 - Present</Text>
                        <Flex flexDirection="row" width="49.3%" mt={5}>
                            <Button disabled leftIcon={<FaGithub fontSize="20px" />}>
                                Coming
                            </Button>
                            <Spacer />
                            <Button disabled leftIcon={<BsYoutube />}>
                                Coming
                            </Button>
                        </Flex>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            An online multiplayer game where players take turns drawing and guessing mathematical functions while competing in teams.
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            Followed the Agile Software Development Process with 4 other students from UWaterloo, Harvard, and UBC. 
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            I primarily used the following technologies:  
                        </Text>
                        <SimpleGrid mt={3} columns={3} spacing={5} alignContent="left">
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">GraphQL</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Socket IO</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">React</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">TypeScript</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Chokra UI</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">MongoDB</Text>
                            </Button>
                        </SimpleGrid>
                    </Flex>
            
                </Box>
            </Flex>
            <Box mt="70px" mb="60px" width="20%" justifyContent="center" alignItems="center">
                <hr></hr>
            </Box>
            {/* fourth project */}
            <Flex mt="65px" direction="row"  width="90%"  height="500px" borderRadius="2xl" >
                <Box width="50%" height="80%" borderRadius="2xl" pl="0px" pt="20px">
                    <Flex flexDirection="column" ml="0px" mr="40px" height="400px" px="15px" py="10px" borderRadius="2xl" borderColor="whiteAlpha.700">
                        <Text color="whiteAlpha.900" fontSize="20px" fontWeight="bold">Meeting Notes Generator</Text>
                        <Text color="whiteAlpha.900" fontSize="20px">Winter 2021 - Summer 2022</Text>
                        <Flex flexDirection="row" width="62%" mt={5}>
                            <Link target="_blank" href="https://github.com/OscarSong2003/MeetingNoteAnalyzer">
                                <Button leftIcon={<FaGithub fontSize="20px" />}>
                                    Source Code
                                </Button>
                            </Link>
                            <Spacer />
                            <Link target="_blank" href="https://youtu.be/tFfNP1MZJA8">
                                <Button leftIcon={<BsYoutube />}>
                                    Video Demo
                                </Button>
                            </Link>
                        
                        </Flex>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            An audio processing application that enables users to record meetings, conduct name entity recognition/speaker segmentation, and output annotated meeting notes.
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            Capable of recording multiple voices with the flexibility of controlling the recording time and period.  
                        </Text>
                        <Text color="whiteAlpha.800" fontSize="18px" mt={3}>
                            I primarily used the following technologies:  
                        </Text>
                        <SimpleGrid mt={3} columns={3} spacing={5} alignContent="left">
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Django</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Python</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Forte</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">Stave</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">JavaScript</Text>
                            </Button>
                            <Button onClick={()=>{}} variant="link" justifyContent="left" leftIcon={<Icon bg="whiteAlpha.900" as={AiOutlineCheck} />} bg="none">
                                <Text color="whiteAlpha.900" fontSize="20px">React</Text>
                            </Button>
                        </SimpleGrid>
                    </Flex>
                </Box>
                <Box width="50%" height="80%" borderWidth="2px" ml="30px" borderRadius="2xl">
                    <Center width="100%" height="100%">
                        {/* <Box borderRadius="2xl" as="iframe" src="https://www.youtube.com/embed/JEENmXVHiu4" allowFullScreen width="97%" height="96%"></Box> */}
                        <Image mr="50px" mb="55px" borderRadius="2xl" height="100%" width="100%" src='/images/analyzer.png' alt='Unex' />
                    </Center>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Projects; 