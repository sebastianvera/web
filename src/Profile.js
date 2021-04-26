import React from 'react';
import styled from 'styled-components';

import pic from './profile.jpg';

const defaultSize = 100;
const RoundedImage = styled.img`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  height: ${(props) => props.size || defaultSize}px;
  width: ${(props) => props.size || defaultSize}px;
  border-radius: ${(props) => (props.size || defaultSize) / 2}px;
  user-drag: none;
  user-select: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: orange;
`;

const Title = styled.h1`
  text-align: center;
  color: #fafbfb;
  font-family: 'Open Sans', sans-serif;
`;

const Footer = styled.p`
  text-align: center;
  font-size: 1em;
  color: #fafbfb;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  margin-top: 2rem;
`;

const Text = styled.p`
  text-align: center;
  color: #fafbfb;
  font-family: 'Raleway', sans-serif;
`;

const Profile = () => (
  <div>
    <RoundedImage src={pic} size={200} alt="Sebastian Vera picture" />
    <Title>Sebastián Vera</Title>
    <Text>
      Fullstack Developer that{' '}
      <span role="img" style="font-size: 1em; text-align: center;" aria-label="love">
        💚
      </span>{' '}
      react, golang and nodejs. I'm currently working as a Software Engineer
      at <Link href="https://twitter.com/google">@Google</Link>.
    </Text>
    <Footer>
      Visit my blog at{' '}
      <Link href="https://blog.apipath.io">blog.apipath.io</Link>
    </Footer>
  </div>
);

export default Profile;
