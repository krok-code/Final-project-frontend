import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;

  button {
    display: flex;
    position: absolute;
    right: 10px;
    top: 60%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    opacity: 0.4;
  }
`;

export const Input = styled.input`
  padding: 14px 18px;
  color: var(--white-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: 1px solid var(--input-color);
  opacity: 0.4;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--white-color);
  }

  ${props =>
    props.$error &&
    `
    color: var(--error-color);
    border-color: var(--error-color);
    &::placeholder {
      color: var(--error-color);
    }
  `}
  @media screen and (min-width: 320px) {
    width: 287px;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  line-height: normal;
  color: var(--error-color);
`;

export const Button = styled.button`
  width: 100%;
  color: var(--black-color);
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: #bedbb0;
  border-radius: 8px;
  padding: 14px;
  &:hover {
    transition: opacity 200ms linear;
    background-color: var(--accent-color);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
