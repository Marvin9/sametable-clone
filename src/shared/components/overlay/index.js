import React from 'react';
import { Box, Flex } from 'rebass';
import { MdClose } from 'react-icons/md';

export const Overlay = ({ children, close }) => (
  <>
    <OverlayWrapper />
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      sx={{ position: 'fixed', left: 0, top: 0 }}
    >
      <Box
        bg="white"
        sx={{
          position: 'relative',
          borderRadius: '5px',
        }}
        py={4}
        px={4}
      >
        <MdClose
          fontSize="2rem"
          style={{
            position: 'absolute',
            right: 10,
            top: 8,
            cursor: 'pointer',
          }}
          onClick={close}
        />
        {children}
      </Box>
    </Flex>
  </>
);

export const OverlayWrapper = () => (
  <div
    style={{
      background: 'black',
      opacity: 0.5,
      position: 'fixed',
      top: 0,
      height: '100vh',
      width: '100vw',
      left: 0,
    }}
  />
);
