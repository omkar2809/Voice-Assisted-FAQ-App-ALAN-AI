import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'
import React from 'react'
import {ColorModeSwitcher} from '../ColorModeSwitcher'

const Navbar = ({toggleColorFlag}) => {
    return (
        <Flex alignItems='center' boxShadow='base' p='2' mb='2'>
            <Box p='2'>
                <Heading size='lg'>E-commerce Support</Heading>
            </Box>
            <Spacer />
            <Box>
                <ColorModeSwitcher toggleColorFlag={toggleColorFlag} />
            </Box>
        </Flex>
    )
}

export default Navbar
