import React from 'react';
import styled from 'styled-components';

import pic from './profile.jpg';

const defaultSize = 100;
const Rounded = styled.img`
  box-shadow: 0 0 8px rgba(0, 0, 0, .6);
  height: ${props => props.size || defaultSize}px;
  width: ${props => props.size || defaultSize}px;
  border-radius: ${props => (props.size || defaultSize) / 2}px;
`;

const Emoji = styled.span`
  padding: 0 2px;
  font-size: 1em;
`;

const Title = styled.h1`
  text-align: center;
  color: #FAFBFB;
  font-family: 'Open Sans', sans-serif;
`;

const Text = styled.p`
  text-align: center;
  color: #FAFBFB;
  font-family: 'Raleway', sans-serif;
`;

const Link = styled.a`
  color: #47BA89;
  text-decoration: none;

  &:hover {
    color: #5AC195;
  }
`;

const Profile = () => (
  <div>
    <Rounded src={pic} size={200} alt="Sebastian Vera picture" />
    <Title>Sebastián Vera</Title>
    <Text>
      Fullstack Developer that{' '}
      <Emoji role="img" aria-label="love">💚</Emoji>
      {' '}
      react and golang. I'm currently working at{' '}
      <Link href="https://www.globant.com/">Globant</Link>
      {' '}as Web UI Developer.
    </Text>
  </div>
);

export default Profile;
