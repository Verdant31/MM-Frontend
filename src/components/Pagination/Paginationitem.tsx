import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ onPageChange, isCurrent = false, number }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button size="sm" fontSize="xs" width="4" color="white" bgColor="#00293A" disabled _disabled={{ bg: 'black', cursor: 'default' }}>
                {number}
            </Button>
        );
    }
    return (
        <Button size="sm" fontSize="xs" width="4" color="white" bgColor="#00293A" _hover={{ bg: 'gray.500' }} onClick={() => onPageChange(number)} >
            {number}
        </Button>
    );
}
