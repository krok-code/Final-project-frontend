import styled from 'styled-components';

export const FiltersModalContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.priorityGreen};
  width: 300px;
  height: 234px;

  background: ${props => props.theme.colors.modalBackground};
  padding: 24px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
`;
