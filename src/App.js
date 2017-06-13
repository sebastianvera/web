import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Profile from './Profile';
import Links from './Links';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Top = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 2s ease-out;
`;

const Bottom = styled.div`
  animation: ${FadeIn} 2s ease-out;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Top><Profile /></Top>
        <Bottom><Links /></Bottom>
      </Wrapper>
    );
  }
}

export default App;
