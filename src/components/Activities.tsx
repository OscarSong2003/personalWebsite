import React from "react";
import { 
    Flex,
    Center,
    Heading,
    Text,
    SimpleGrid,
    Box,
    Button,
    Icon
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const Activities = () => {
    return (
        <Flex id="activities" direction="column" justifyContent="center" alignItems="center"
        width="100%" height="900px">
            <Center width="100%"><Heading mb={5} color="whiteAlpha.900" className="animate-character5" fontSize="5xl" >Activities & Interests</Heading></Center>
            <Text fontSize="2xl" color="whiteAlpha.800">My extracurricular involvements & other passions.</Text>  

            <SimpleGrid mt="50px" columns={3} width="75%" spacing={8}>
                <Flex direction="column" borderWidth="2px" p="20px" borderRadius="2xl">
                    {/* <Box width="100%" textAlign="center">    */}
                        <Text fontSize="20px" color="whiteAlpha.800" fontWeight="bold">Michigan Mars Rovers Team</Text>
                        <Text fontSize="19px" color="whiteAlpha.800">Student Developer</Text>
                        <Text fontSize="19px" color="whiteAlpha.800">Fall 2021 - Winter 2022</Text>
                    {/* </Box> */}
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">Utilized Vue.js and TypeScript to create a 2D simulation of the driving rover 
                            as a developer on the software simulation team.</Text>
                    </Flex>
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">Integrated unreal engine with C++ to enhance 3D Rover Simulation.</Text>
                    </Flex>
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">Won 1st Place @ the 2022 University Rover Challenge</Text>
                    </Flex>
                </Flex>
                {/* second activity */}
                <Flex direction="column" borderWidth="2px" p="20px" borderRadius="2xl">
                    {/* <Box width="100%" textAlign="center">    */}
                        <Text fontSize="20px" color="whiteAlpha.800" fontWeight="bold">MPowered Entrepreneurship</Text>
                        <Text fontSize="19px" color="whiteAlpha.800">Talent Member & Event Executive</Text>
                        <Text fontSize="19px" color="whiteAlpha.800">Fall 2021 - Fall 2022</Text>
                    {/* </Box> */}
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">Involved in hosting the 2022 University of Michigan Entrepreneurship Summit.</Text>
                    </Flex>
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">Invited Mike McFall, CEO of Biggby Coffee, as the event keynote speaker.</Text>
                    </Flex>
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">Helped raise $15K+ for event sponsorship.</Text>
                    </Flex>
                </Flex>

                <Flex direction="column" borderWidth="2px" p="20px" borderRadius="2xl">
                    {/* <Box width="100%" textAlign="center">    */}
                        <Text fontSize="20px" color="whiteAlpha.800" fontWeight="bold">Personal Interests</Text>
                        <Text fontSize="19px" color="whiteAlpha.800">Some Hobbies and Passions</Text>
                        
                    {/* </Box> */}
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">I have played the piano for 13 years and achieved honors for both ARCT Performers and Level 10 Piano with RCM.</Text>
                    </Flex>
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">I also enjoy playing the alto sax, clarinet, and percussion instruments as well.</Text>
                    </Flex>
                    <Flex mt={2} direction="row" justifyContent="left">
                        <Icon mt="7px" bg="whiteAlpha.900" as={AiFillStar} size="20px" />
                        <Text ml={3} color="whiteAlpha.900" fontSize="17px">On my spare time, you may find me cooking or building websites.</Text>
                    </Flex>
                </Flex>
                
            </SimpleGrid>  
        </Flex>
    )
    
}

export default Activities;