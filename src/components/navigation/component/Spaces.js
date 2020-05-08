import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from 'rebass';

import { SHeading } from '../../../shared';
import { SpacesContext } from '../../../store/contexts';

export const Spaces = () => {
  const [resolvedSpaces, updateSpaces] = useState([]);

  const { spaces } = useContext(SpacesContext);

  useEffect(() => {
    const getSpaces = async () => {
      const s = await spaces;
      return s;
    };
    getSpaces().then((s) => updateSpaces(s));
  }, [spaces]);

  if (resolvedSpaces.length) {
    return (
      <>
        {resolvedSpaces.map((space) => (
          <NavLink
            key={space.id}
            to={`/spaces/${space.id}`}
            style={{ color: 'black', textDecoration: 'none' }}
            activeStyle={{ fontWeight: 'bold' }}
          >
            <Box my={2} p={2} sx={{ borderRadius: '5px' }} bg="rgba(0, 0, 0, 0.05)">
              {space.spaceName}
            </Box>
          </NavLink>
        ))}
      </>
    );
  }
  return (
    <SHeading mx={0} fontWeight="lighter" sx={{ textDecoration: 'underline' }}>
      No spaces
    </SHeading>
  );
};
