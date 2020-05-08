import React from 'react';
import { Button } from 'rebass';

export const CustomButton = ({ children, ...all }) => (
  <Button
    {...all}
    sx={{
      background: 'black',
      cursor: 'pointer',
      '&: focus': {
        outline: 'none',
      },
    }}
    my={2}
  >
    {children}
  </Button>
);
