import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../assets/fonts/styles/theme';

export const WelcomeWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  border: 1px solid ${theme.colors.primaryBlack};
  width: calc(100% - 84px);
  padding: 24px;
  background: ${theme.colors.bgForm};
  border-radius: ${theme.borderRadius.main};

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    border: 1px solid ${theme.colors.primaryBlack};
    padding: 40px;
    width: 424px;
  }
`;

export const ModalNav = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const ModalNavItem = styled(NavLink)`
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.subtitle};
  line-height: ${theme.lineHeights.main};
  letter-spacing: ${theme.letterSpacing.small};
  text-decoration: none;
  color: ${theme.colors.secondaryGray};
  background: none;
  border: none;
  transition: color ${theme.transition.normal};

  &:hover,
  &.active {
    color: ${theme.colors.primaryWhite};
  }
`;
