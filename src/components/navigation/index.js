import React from 'react';
import { Box } from 'rebass';
import { FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { MHeading } from '../../shared';

import { BoxStyle, LinkStyle } from './styles';
import { Title } from './component/Title';
import { Spaces } from './component/Spaces';

export const Navigation = () => (
  <Box width={1 / 5} sx={BoxStyle} bg="light" p={3}>
    <MHeading>
      <FaLightbulb />
      {' '}
      <Link to="/" style={LinkStyle}>
        My Tasks
      </Link>
    </MHeading>

    <Title />

    <Spaces />
  </Box>
);
