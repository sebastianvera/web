import React from 'react';
import styled from 'styled-components';

import pic from './profile.jpg';

const defaultSize = 100;
const RoundedImage = styled.img`
  box-shadow: 0 0 8px rgba(0, 0, 0, .6);
  height: ${props => props.size || defaultSize}px;
  width: ${props => props.size || defaultSize}px;
  border-radius: ${props => (props.size || defaultSize) / 2}px;
  user-drag: none;
  user-select: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: orange;
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

const Profile = () =>
  <div>
    <RoundedImage src={pic} size={200} alt="Sebastian Vera picture" />
    <Title>Sebastián Vera</Title>
    <Text>
      Fullstack Developer that{' '}
      <Emoji role="img" aria-label="love">💚</Emoji>
      {' '}
      react, golang and nodejs. I'm currently working as a Backend Developer at
      {' '}
      <Link href="https://twitter.com/ShareIq">@Shareiq</Link>.
    </Text>
  </div>;

export default Profile;