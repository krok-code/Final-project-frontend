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
    background-color: ${props => (props.approve ? '#9dc888' : '#121212')};
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 344px;
  }
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #121212; /* Замініть на потрібний вам колір */
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #fff; /* Замініть на потрібний вам колір */
`;

export const Text = styled.p`
  color: #121212;
  font-size: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  width: 150px;
`;
