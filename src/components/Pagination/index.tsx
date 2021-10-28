import { Button } from '@chakra-ui/button';
import { Box, Stack } from '@chakra-ui/layout';
import { useState } from 'react';

interface PaginationProps {
    immobiles: {
        id: string;
        image: string;
        type: string;
        price: number;
        size: number;
        toilets: number;
        suites: number;
        rooms: number;
        slots: number;
    }[];
}

export function Pagination({ immobiles }: PaginationProps) {

    return (
        <Stack direction="column" mt="12" spacing="6" align="center">
            <Box w="100%" align="center">
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{
                    bg: 'pink.500',
                    cursor: 'default',
                }}>
                    1
                </Button>
                <Button textColor="white" size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{
                    bg: 'gray.500'
                }} >
                    2
                </Button>
                <Button textColor="white" size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{
                    bg: 'gray.500'
                }} >
                    3
                </Button>
                <Button textColor="white" size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{
                    bg: 'gray.500'
                }} >
                    4
                </Button>
            </Stack>

        </Stack>
    )
}
