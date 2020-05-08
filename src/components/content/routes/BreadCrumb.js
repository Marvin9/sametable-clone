import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Flex } from 'rebass';
import { Link } from 'react-router-dom';

export const BreadCrumb = ({ data }) => (
  <Flex alignItems="center">
    {data.map((route) => (
      <React.Fragment key={route.route}>
        <Link
          to={route.route}
          style={{
            padding: 5,
          }}
        >
          {route.name}
          {' '}
        </Link>
        <FaArrowRight fontSize={10} />
      </React.Fragment>
    ))}
  </Flex>
);
