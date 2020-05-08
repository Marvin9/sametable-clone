import React from 'react';
import { Box } from 'rebass';
import { Route } from 'react-router-dom';

import { Space } from './routes/space';
import { Project } from './routes/project';

export const Content = () => (
  <Box p={3} width={4 / 5} px={5} height="100vh" overflow="auto">
    <Route
      path="/spaces/:spaceId"
      exact
      component={({ match }) => (
        <Space spaceId={match.params.spaceId} />
      )}
    />

    <Route
      path="/project/:projectId"
      component={Project}
    />
  </Box>
);
