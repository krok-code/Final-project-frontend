import styled from 'styled-components';

export const ModalContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.priorityGreen};
  width: 335px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Ensure the modal appears above other content */

  background: ${props => props.theme.colors.modalBackground};
  padding: 24px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  color: ${props => props.theme.colors.whiteColor};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;
