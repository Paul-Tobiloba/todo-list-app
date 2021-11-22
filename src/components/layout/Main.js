import { Box } from '@chakra-ui/react'
import React from 'react'

const Main = (props) => {
    return (
        <Box h="80vh">
            {props.children}
        </Box>
    )
}

export default Main
