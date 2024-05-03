import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 32px 12px;
  width: 335px;
  height: 440px;
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1008px;
  }
`;
