import styled from 'styled-components';

export const DragDropContext = styled.div`
  margin: 0 20px;
  display: flex;
  gap: 32px;
  flex-wrap: nowrap;
  overflow-x: auto;
  height: calc(100vh - 142px);

  &::-webkit-scrollbar {
    height: 12px;
    border-radius: 12px;
    background-color: var(--darkBgColor);
    @media (max-width: 1440px) {
      height: calc(100vh - 172px);
    }

    @media (max-width: 762px) {
      height: calc(100vh - 162px);
    }
  }
  &:-webkit-scrollbar-thumb {
    border-radius: 12px;
    width: 12px;
    border: none;
    background-color: #404040;
  }
`;

export const Column = styled.ul`
  display: flex;
  gap: 18px;
  flex-wrap: nowrap;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 52px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const Droppable = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: 60vh;
  padding-right: 4px;
  padding-top: 4px;
  margin-bottom: 14px;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: var(--darkBgColor);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    width: 4px;
    border: none;
    background-color: #404040;
  }
  @media (min-width: 768px) {
    padding-right: 8px;
  }
`;
