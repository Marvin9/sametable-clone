import React from 'react';

export const Table = ({ children }) => (
  <table width="100%" style={{ borderRadius: '5px' }}>
    {children}
  </table>
);

export const TableHeading = ({ children, ...rest }) => (
  <td style={{ textAlign: 'left' }} {...rest}>
    {children}
  </td>
);

export const Row = ({ children, ...rest }) => (
  <tr {...rest}>
    {children}
  </tr>
);

export const Column = ({ children, ...rest }) => (
  <td {...rest}>
    {children}
  </td>
);
