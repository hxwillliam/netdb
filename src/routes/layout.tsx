import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const RootLayout = () => {
  return (
    <Box p={4}>
      <Outlet />
    </Box>
  );
};