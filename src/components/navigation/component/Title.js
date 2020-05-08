import React, { useContext, useState } from 'react';
import { Flex } from 'rebass';
import { FaPlus } from 'react-icons/fa';

import { SHeading } from '../../../shared';

import { FaPlusStyle } from '../styles';
import { CreateSpace } from './CreateSpace';

import { SpacesContext } from '../../../store/contexts';

export const Title = () => {
  const [showOverlay, updateOverlay] = useState(false);

  const toggleOverlay = () => updateOverlay(!showOverlay);

  const { spaceDispatcher } = useContext(SpacesContext);

  return (
    <Flex mt={4} alignItems="center">
      <SHeading ml={0} my={0}>
        Workspaces
      </SHeading>

      <FaPlus
        style={FaPlusStyle}
        onClick={toggleOverlay}
      />

      {showOverlay
        && <CreateSpace toggleOverlay={toggleOverlay} spaceDispatcher={spaceDispatcher} />}
    </Flex>
  );
};
