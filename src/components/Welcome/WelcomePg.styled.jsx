import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${theme.colors.primaryGreen} 92.19%
  );
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 473px;
  }
`;

export const Img = styled.img`
  width: 124px;
  height: 124px;

  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 42px;
  margin-top: 14px;

  @media (min-width: 768px) {
    margin-top: 24px;
    height: 60px;
  }
`;

export const ImgLogo = styled.svg`
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.primaryDark};
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacing.medium};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    letter-spacing: ${theme.letterSpacing.normal};
  }
`;

export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
  color: ${theme.colors.primaryDark};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.normal};
  letter-spacing: ${theme.letterSpacing.small};
`;

export const Btn = styled(NavLink)`
  margin-bottom: 14px;
  text-align: center;
  width: calc(100% - 40px);
  padding: 14px;
  text-decoration: none;
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: ${theme.letterSpacing.small};
  color: ${theme.colors.primaryDark};
  &:hover {
    color: ${theme.colors.primaryWhite};
    border-radius: ${theme.borderRadius.main};
    background: ${theme.colors.primaryDark};
    transition: ${theme.transition.normal};
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`;
