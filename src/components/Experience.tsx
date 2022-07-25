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
        <Flex direction="column" justifyContent="center" alignItems="center"
        width="100%" height="900px">
             <Heading mb={5} color="whiteAlpha.900">Experience</Heading>
             <Flex direction="column" justifyContent="left" alignItems="left"
             width="50%">
                <Text mt={8} fontSize="22px" color="whiteAlpha.800">Research Intern @ Michigan Human-AI Lab</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">Ann Arbor, Michigan</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">May 2022 - Present</Text>

                <Text my={5} fontSize="20px" color="whiteAlpha.800">
                    Enhanced the Human-Computer Interaction of machine learning toolkits 
                    for the CASL Project by collaborating with Professor Anhong Guo and Hector Liu, 
                    Head of Engineering at Petuum Inc.</Text>

                <Text fontSize="20px" color="whiteAlpha.800">
                    Developed an audio processing application along with a natural language processing graphical
                    user interface using React, Django, Forte, and Stave. Learn more in my projects section!
                </Text>
             </Flex>
             {/* <Box mt={9} width="20%" justifyContent="center" alignItems="center">
                <hr></hr>
             </Box> */}
             {/* <Flex direction="column" justifyContent="left" alignItems="left"
             width="50%">
                <Text mt={8} fontSize="22px" color="whiteAlpha.800">Student Developer @ The Friday Projects</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">Remote</Text>
                <Text mt={1} fontSize="20px" color="whiteAlpha.800">Summer 2021 - Present</Text>

                <Text my={5} fontSize="20px" color="whiteAlpha.800">
                    Enhanced the Human-Computer Interaction of machine learning toolkits 
                    for the CASL Project by collaborating with Professor Anhong Guo and Hector Liu, 
                    Head of Engineering at Petuum Inc.</Text>

                <Text fontSize="20px" color="whiteAlpha.800">
                    Developed an audio processing application along with a natural language processing graphical
                    user interface using React, Django, Forte, and Stave. Learn more in my projects section!
                </Text>
             </Flex>
             <Box mt={9} width="20%" justifyContent="center" alignItems="center">
                <hr></hr>
             </Box> */}
        </Flex>
    )
}

export default Experience; 