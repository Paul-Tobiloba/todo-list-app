import { Box, Button, Img } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/icons/Todo_App_Icon.png'

const Header = (props) => {
    return (
        <Box h="7vh" w="100%" display="flex" alignItems="center">
            <Box w="100%" h="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
                <a href="/"
                    style={{
                        textDecoration: 'none',
                        color: '#000',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}
                >
                    <Img src={logo} alt="logo"
                        width="50px"
                        height="50px"
                        marginRight="10px"

                    />
                </a>
                <Button>Sign Out</Button>
            </Box>
        </Box>
    )
}

export default Header
