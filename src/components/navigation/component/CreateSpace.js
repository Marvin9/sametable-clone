import React, { useState } from 'react';
import { Label } from '@rebass/forms';

import {
  CustomButton, CustomInput, LHeading, Overlay,
} from '../../../shared';

export const CreateSpace = ({ toggleOverlay, spaceDispatcher }) => {
  const [newSpaceName, updateSpaceName] = useState('');

  return (
    <Overlay close={toggleOverlay}>
      <LHeading m={0}>
        Create a workspace
      </LHeading>
      <br />
      <Label htmlFor="name" sx={{ fontWeight: 'bold' }}>
        Name
      </Label>
      <CustomInput
        type="text"
        placeholder="e.g. Internship Assignment"
        value={newSpaceName}
        onChange={(e) => updateSpaceName(e.target.value)}
      />

      <CustomButton
        onClick={() => {
          spaceDispatcher({ type: 'ADD', spaceName: newSpaceName });
        }}
      >
        Create
      </CustomButton>
    </Overlay>
  );
};
