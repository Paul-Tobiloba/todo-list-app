import { Box } from '@chakra-ui/react'
import React from 'react'

function Footer(props) {
    return (
        <Box h="13vh" w="100%" display="flex" flexDirection="column" textAlign="center" justifyContent="flex-end">
            {props.children}
        </Box>
    )
}

export default Footer
