import React from "react";
import { 
    Flex, 
    Center,
    Heading,
    Text,
    Box,
    Button,
    Spacer,
    Link
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'

const ReachOut = (): React.ReactElement => {
    return (
        <Flex id="reachOut" direction="column" justifyContent="center" alignItems="center"
        width="100%" height="700px">
            <Center width="100%"><Heading mb={5} color="whiteAlpha.900" className="animate-character6">Contact & Connect With Me</Heading></Center>
            <Box mt={3} width="55%" textAlign="center">
                <Text fontSize="2xl" color="whiteAlpha.800">I am currently seeking software engineering related internships and opportunities!
                If you would like to connect with me or simply chat, please do not hesitate to reach out at anytime on LinkedIn or Email! 
                I will try to respond as soon as possible.</Text>  
            </Box>
            <Flex mt="80px" direction="row" width="24%" justifyContent="center" alignItems="center">
                <Link href="https://www.linkedin.com/in/linfeng-oscar-song/" target="_blank">
                    <Button leftIcon={<FaLinkedin fontSize="20px" />}>
                        Connect on LinkedIn
                    </Button>
                </Link>
                
                <Spacer />

                <Link href="mailto: osong@umich.edu">
                    <Button leftIcon={<HiOutlineMailOpen fontSize="20px" />}>
                        Email me
                    </Button>
                </Link>
            </Flex>
            

        </Flex>
    )
}

export default ReachOut; 
