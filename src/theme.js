import preset from '@rebass/preset';

export const theme = {
  ...preset,
  colors: {
    ...preset.colors,
    light: '#FBFBFB',
    pink: 'pink',
  },
  breakpoints: ['769px', '3000px'],
};
