import styled from 'styled-components';

const defaultPillHeight = 80;
const Pill = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: ${props => props.height || defaultPillHeight}px;
  border-radius: ${props => props.height / 2 || defaultPillHeight / 2}px;
  padding: 0 ${props => props.height / 2 || defaultPillHeight}px;

  background-color: #FAFBFB;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .4);
`;

export default Pill;
