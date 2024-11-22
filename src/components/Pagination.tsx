import { Button, Flex } from '@chakra-ui/react';

type PaginationProps = {
  page: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ page, onPageChange }: PaginationProps) => {
  return (
    <Flex justify="center" mt={4} gap={2}>
      <Button 
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        color="gray.800"
      >
        Previous
      </Button>
      <Button 
        onClick={() => onPageChange(page + 1)}
        color="gray.800"
      >
        Next
      </Button>
    </Flex>
  );
};