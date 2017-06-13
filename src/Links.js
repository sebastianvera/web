import React from 'react';
import styled from 'styled-components';

import github from './github.svg';
import twitter from './twitter.svg';
import Pill from './Pill';

const defaultIconSize = 20;
const Icon = styled.img`
  height: ${props => props.size || defaultIconSize}px;
  width: ${props => props.size || defaultIconSize}px;
  padding: 0 5px;
`;

const Link = styled.a`
  text-align: center;
  color: #FAFBFB;
  font-family: 'Open Sans', sans-serif;

  text-decoration: none;
`;

const Links = () => (
  <Pill height={50}>
    <Link href="https://github.com/sebastianvera">
      <Icon src={github} size={20} />
    </Link>
    <Link href="https://twitter.com/sebalvear">
      <Icon src={twitter} size={20} />
    </Link>
  </Pill>
);

export default Links;
