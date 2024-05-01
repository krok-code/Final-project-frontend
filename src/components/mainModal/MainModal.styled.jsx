import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${theme.colors.primaryBlack};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${theme.borderRadius.main};
  background-color: ${theme.colors.primaryWhite};
  box-shadow: ${theme.shadow.popup};
`;
