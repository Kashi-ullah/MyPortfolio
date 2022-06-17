import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Heading, Text, Box } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
import {FaArrowRight} from 'react-icons/fa';
const Profile = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    return (
        <Flex direction={isMobile ? "column" : "row"}
            w='100%' maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
            <Box alignSelf='center' px='32' py='16' >
                <Heading fontWeight='semibold' color='blue.200' fontSize='5xl'>
                    1+ </Heading>
                <Text fontSize="3xl" color='gray'>Year of Experience </Text>
          
            </Box>
            <Flex>
                    <Flex mt='10'  >
                    <Text bgColor='blue.600' p='10' mr='1' fontSize="3xl" color='gray.900'>NFT UI`s </Text>
                    <Text bgColor='blue.600' p='10' mr='1' fontSize="3xl" color='gray.900'>NFT UI`s </Text>
                    <Text bgColor='blue.600' p='10' mr='1' fontSize="3xl" color='gray.900'>NFT UI`s </Text>
                    <Icon alignSelf='center' as={FaArrowRight} boxSize='50' />
                    </Flex>
            </Flex>
                        
               
            


        </Flex>
    )
}

export default Profile