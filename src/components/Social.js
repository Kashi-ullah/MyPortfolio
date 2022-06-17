import { HStack, Stack } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon';
import React from 'react'
import {FaFacebook, FaGoogle,FaSpotify,FaShopify} from 'react-icons/fa';

const Social = () => {
  return (
    <HStack spacing='10'>
        <Icon as={FaFacebook} boxSize='50' />
        <Icon as={FaGoogle} boxSize='50' />
        <Icon as={FaSpotify} boxSize='50' />
        <Icon as={FaShopify} boxSize='50' />
    </HStack>
  )
}

export default Social