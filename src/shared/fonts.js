import React from 'react';
import { Text } from 'rebass';

const headingCommonProps = {
  fontWeight: 'bold',
  m: 3,
};

export const LHeading = ({ children, ...rest }) => (
  <Text fontSize={5} display="inline-block" {...headingCommonProps} {...rest}>
    {children}
  </Text>
);

export const MHeading = ({ children, ...rest }) => (
  <Text fontSize={3} {...headingCommonProps} {...rest}>
    {children}
  </Text>
);

export const SHeading = ({ children, ...rest }) => (
  <Text fontSize={2} {...headingCommonProps} {...rest}>
    {children}
  </Text>
);
