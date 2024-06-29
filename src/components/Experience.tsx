import React from "react";
import { 
    Flex,
    Heading,
    Text,
    Divider,
    Box
} from "@chakra-ui/react";

const Experience = (): React.ReactElement => {
    return (
        <Flex id="experience" direction="column" justifyContent="center" alignItems="center"
        width="100%" minHeight="900px" marginTop="300px" paddingTop="150px" mb="100px">
             <Heading mb={5} color="whiteAlpha.900" className="animate-character3">Experience</Heading>
             <Flex mt={9} direction="column" justifyContent="left" alignItems="left"
             width="50%" marginLeft="2px" borderLeft="2px" borderLeftWidth="2px" pl={5} borderColor="whiteAlpha.700">
                <Text fontSize="22px" color="whiteAlpha.800">Software Development Engineer Intern @ Amazon</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">San Diego, California</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">May 2023 - July 2023</Text>
                <Text my={5} fontSize="20px" color="whiteAlpha.800">
                    Introduced client and team facing dashboards to reflect core system performance metrics for Buyer Abuse Engineering.
                </Text>
                <Text fontSize="20px" color="whiteAlpha.800">
                    Developed a front-end user interface that facilitates the generation of JSON specifications used in internal machine learning pipelines and services.
                </Text>
            </Flex>

            <Flex mt="50px" direction="column" justifyContent="left" alignItems="left"
             width="50%" marginLeft="2px" borderLeft="2px" borderLeftWidth="2px" pl={5} borderColor="whiteAlpha.700">
                <Text fontSize="22px" color="whiteAlpha.800">Student Researcher @ Michigan Human-AI Lab</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">Ann Arbor, Michigan</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">August 2022 - May 2024</Text>
                <Text my={5} fontSize="20px" color="whiteAlpha.800">
                    Lead the creation of a 360° video viewing web interface for Blind and Visually Impaired (BVI) individuals to navigate panorama videos, integrating AI and HCI functionalities including object, scene, and spatial audio descriptions.
                </Text>
            </Flex>

             <Flex mt="50px" direction="column" justifyContent="left" alignItems="left"
             width="50%" marginLeft="2px" borderLeft="2px" borderLeftWidth="2px" pl={5} borderColor="whiteAlpha.700">
                <Text fontSize="22px" color="whiteAlpha.800">Research Intern @ Michigan Human-AI Lab</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">Ann Arbor, Michigan</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">May 2022 - August 2022</Text>

                <Text my={5} fontSize="20px" color="whiteAlpha.800">
                    Enhanced the Human-Computer Interaction of machine learning toolkits 
                    for the CASL Project by collaborating with Professor Anhong Guo and Hector Liu, 
                    Head of Engineering at Petuum Inc.</Text>

                <Text fontSize="20px" color="whiteAlpha.800">
                    Developed an audio processing application along with a natural language processing graphical
                    user interface using React, Django, Forte, and Stave. Learn more in my projects section!
                </Text>
             </Flex>
             {/* Incoming */}
             
                {/* <Text my={5} fontSize="20px" color="whiteAlpha.800">
                    Enhanced the Human-Computer Interaction of machine learning toolkits 
                    for the CASL Project by collaborating with Professor Anhong Guo and Hector Liu, 
                    Head of Engineering at Petuum Inc.</Text>

                <Text fontSize="20px" color="whiteAlpha.800">
                    Developed an audio processing application along with a natural language processing graphical
                    user interface using React, Django, Forte, and Stave. Learn more in my projects section!
                </Text> */}
            
        </Flex>
    )
}

export default Experience; 