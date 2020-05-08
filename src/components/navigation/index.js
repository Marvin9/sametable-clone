import React, { useState } from 'react';
import { Box } from 'rebass';
import { FaLightbulb, FaAsterisk } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { MHeading } from '../../shared';

import { BoxStyle, LinkStyle } from './styles';
import { Title } from './component/Title';
import { Spaces } from './component/Spaces';

export const Navigation = () => {
  const [showNav, updateNav] = useState(window.innerWidth > 768);

  const toggleNav = () => updateNav(!showNav);

  return (
    <Box
      width={[1, 1 / 5]}
      sx={BoxStyle}
      bg="light"
      p={3}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      sx={{
        position: ['fixed', 'static'],
      }}
    >
      {window.innerWidth <= 768 && (
        <FaAsterisk style={{ position: 'fixed', top: 10, right: 10 }} onClick={toggleNav} />
      )}
      <MHeading>
        <FaLightbulb />
        {' '}
        <Link to="/" style={LinkStyle}>
          My Tasks
        </Link>
      </MHeading>

      {showNav && (
        <>
          <Title />

          <Spaces />
        </>
      )}

    </Box>
  );
};
