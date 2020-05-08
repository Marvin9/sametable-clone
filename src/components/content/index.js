import React from 'react';
import { Box } from 'rebass';
import { Route } from 'react-router-dom';

import { Space } from './routes/space';
import { Project } from './routes/project';
import { Task } from './routes/task';

export const Content = () => (
  <Box p={3} pt={[6, 3]} width={[1, 4 / 5]} px={[0, 5]} height="100vh" overflow="auto">
    <Route
      path="/spaces/:spaceId"
      component={({ match }) => (
        <Space spaceId={match.params.spaceId} />
      )}
    />

    <Route
      path="/project/:projectId"
      component={Project}
    />

    <Route
      path="/task/:taskId"
      component={Task}
    />
  </Box>
);
