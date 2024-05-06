import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 45px;

  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: ${props => (props.approve ? '#BEDBB0' : '#121212')};
  border-radius: 8px;
  padding: 14px;

  &:hover {
    transition: opacity 200ms linear;
    background-color: ${props => (props.approve ? ' #9dc888;' : '#121212')};
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 344px;
  }
`;
