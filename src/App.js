import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import {FaSun,FaMoon,FaInstagram,FaGithub, FaLinkedin} from 'react-icons/fa';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';
function App() {
 const {colorMode, toggleColorMode} = useColorMode();
 const isDark = colorMode ==="dark";
  return (
    <VStack p={5}>
      <Flex w='100%'>
        <Heading ml='8' size='md' p='5' fontWeight='semibold' color='blue.200' >My Portfolio </Heading>
      
      <Spacer></Spacer>
      <IconButton ml='8'  icon={<FaLinkedin/>}  isRound='true'></IconButton>
      <IconButton ml='8'  icon={<FaInstagram/>}  isRound='true'></IconButton>
      <IconButton ml='8'  icon={<FaGithub/>} isRound='true'></IconButton>
      <IconButton ml='8'  icon={isDark?<FaSun />:<FaMoon/>} onClick={toggleColorMode} isRound='true'></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
