import React from 'react';
import { Input } from '@rebass/forms';

const focusStyle = {
  outline: 'none',
  boxShadow: '0px 0px 0px 4px yellow',
};

const generateStyle = (hidden) => (hidden
  ? ({
    border: 'none',
    '&:focus': {
      ...focusStyle,
      border: '2px solid black',
    },
  })
  : ({
    border: '2px solid black',
    borderRadius: 0,
    '&:focus': focusStyle,
  }));

export const CustomInput = ({ hidden, ...all }) => (
  <Input
    sx={generateStyle(hidden)}
    my={2}
    {...all}
  />
);
