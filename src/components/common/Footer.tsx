import react from 'react';
import { 
    Container,
    Stack, 
    ButtonGroup, 
    IconButton,
    Text,
    Box,
    Image,
    Flex,
    Spacer
} from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = (): React.ReactElement => {
    return (
            <Flex position="absolute" width="100%" bottom="0" direction="row" backgroundColor="whiteAlpha.800" height="60px" pt={2} mb={0}> 
                <Image mt={2} pb={1} ml={8} height="30px" src="/images/logo.png" alt="logo" />
                <Spacer />
                <Text  pt="9px" mr={6} fontSize="sm" fontWeight="bold">
                    Created by Linfeng Song
                </Text>
                <ButtonGroup variant="ghost" mr={8}>
                <IconButton
                    as="a"
                    target="_blank"
                    href="https://www.linkedin.com/in/linfeng-oscar-song/"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin fontSize="1.25rem" />}
                />

                <IconButton as="a" target="_blank" href="https://github.com/OscarSong2003" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                </ButtonGroup>
            </Flex> 
            )
        
}

export default Footer;
