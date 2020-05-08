import React, { useReducer, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { Flex } from 'rebass';

import { theme } from './theme';
import { Content, Navigation } from './components';

import { SpacesContext, TrackContext } from './store/contexts';
import { spacesReducer, trackReducer } from './store/reducers';

export default () => {
  const [spaces, spaceDispatcher] = useReducer(spacesReducer, []);
  const [tracker, trackDispatcher] = useReducer(trackReducer, {});

  useEffect(() => { spaceDispatcher({ type: 'GET' }); }, []);

  return (
    <ThemeProvider theme={theme}>
      <SpacesContext.Provider value={{ spaces, spaceDispatcher }}>
        <TrackContext.Provider value={{ tracker, trackDispatcher }}>
          <Flex height="100vh">
            <Navigation />

            <Content />
          </Flex>
        </TrackContext.Provider>
      </SpacesContext.Provider>
    </ThemeProvider>
  );
};
