import { Box, Button, Icon, Img, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import React from 'react';

import logo from '../../assets/icons/Todo_App_Icon.png';
import { ActiveIcon } from '../../assets/icons/Icon';

const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

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
                <Button
                    ref={btnRef}
                    colorScheme="purple"
                    onClick={onOpen}
                >
                    <Icon as={ActiveIcon} />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Box as="h2" fontSize="lg" fontWeight="semibold" color="gray.600">
                                Menu
                            </Box>
                        </DrawerHeader>
                        <DrawerBody>
                            <Box as="ul" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Box as="li" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                    <a href="/">
                                        <Button
                                            colorScheme="purple"
                                            variant="outline"
                                            size="sm"
                                            marginRight="10px"
                                        >
                                            Home
                                        </Button>
                                    </a>
                                    <a href="/">
                                        <Button
                                            colorScheme="purple"
                                            variant="outline"
                                            size="sm"
                                            marginRight="10px"
                                        >
                                            SignOut
                                        </Button>
                                    </a>
                                </Box>
                            </Box>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button
                                onClick={onClose}
                                colorScheme="purple"
                                variant="outline"
                                size="sm"
                                marginRight="10px"
                            >
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}

export default Header
