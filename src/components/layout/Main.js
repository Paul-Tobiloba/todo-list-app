import { Box } from '@chakra-ui/react'
import React from 'react'

const Main = (props) => {
    return (
        <Box mh="80vh" h="80vh" w="100%">
            {props.children}
        </Box>
    )
}

export default Main
