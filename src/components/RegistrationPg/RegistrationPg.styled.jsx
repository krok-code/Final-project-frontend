import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrap = styled.div`
  position: relative;

  button {
    display: flex;
    position: absolute;
    right: 10px;
    top: 60%;
    transform: ${theme.transform.transformY};
    border: none;
    background-color: transparent;
    opacity: 0.4;
  }
`;

export const Input = styled.input`
  padding: 14px 18px;
  font-size: ${theme.fontSizes.text};
  letter-spacing: ${theme.letterSpacing.small};
  color: ${theme.colors.primaryWhite};
  border-radius: ${theme.borderRadius.main};
  border: ${theme.border.darkTheme};
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.primaryWhite};
  }

  ${props =>
    props.$error
      ? {
          color: theme.colors.secondaryRed,
          borderColor: theme.colors.secondaryRed,
          '&::placeholder': { color: theme.colors.secondaryRed },
        }
      : []}
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
  font-size: ${theme.fontSizes.info};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.secondaryRed};
`;

export const Button = styled.button`
  width: 100%;
  color: ${theme.colors.primaryBlack};
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: ${theme.letterSpacing.small};
  background-color: ${theme.colors.primaryGreen};
  border-radius: ${theme.borderRadius.main};
  padding: 14px;
  &:hover {
    transition: ${theme.transition.normal};
    background-color: ${theme.colors.hoverGreen};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Text = styled.span`
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlue};
  text-decoration: none;
  &:hover {
    color: ${theme.colors.secondaryOrange};
    transition: ${theme.transition.normal};
  }
`;
