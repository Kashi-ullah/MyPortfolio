import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/react';


const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    return (
        <Stack>
            
            <Circle position="absolute"
                bg='blue.100' opacity='0.1'
                w='300px' h='300px'
                alignSelf='flex-end'></Circle>
            <Flex direction={isMobile ? "column" :  "row"}
                spacing="200px" p={isMobile ? '32' : '0'}
                alignSelf='flex-start'>

                <Box mt={isMobile ? '0' : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight='semibold'>Hi I am</Text>
                    <Text fontSize="7xl" fontWeight='bold' bgGradient="linear(to-r, cyan.400,blue.500,purple.600)" bgClip='text' >Kashif Ullah</Text>
                    <Text fontSize="3xl" color={isDark ? 'gray.200' : 'gray.500'}>Making The Best UI | Imagination To Reality </Text>
                    <Button m='8' colorScheme='blue'>Hire Me</Button>
                </Box>
                <Image
                    alignSelf='center' mt={isMobile ? '0' : '12'}
                    mb={isMobile ? '0' : '12'}
                    src='me-modified.png'
                    boxSize='300px'
                />


            </Flex>

        </Stack>
    )
}

export default Header