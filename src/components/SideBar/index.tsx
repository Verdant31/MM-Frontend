import { Box, DrawerHeader, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Drawer, useBreakpointValue } from '@chakra-ui/react';
import { useHeader } from '../../contexts/HeaderContext';
import { SidebarNav } from './SideBarNav';

export function SideBar() {
    const { isOpen, onClose } = useHeader();


    const isMobile = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
        xl: false,
    })

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="#00293A" p="4">
                        <DrawerCloseButton mt="6" color="white" />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    )

}
