import React, { useState } from 'react';
import { Container, Link, TextBox } from './Board.styled';
import AddBoardModal from 'components/Modals/AddBoardModal/AddBoardModal';

const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [boardCreated, setBoardCreated] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBoardCreated = name => {
    setBoardName(name);
    setBoardCreated(true);
  };

  return (
    <>
      {!boardCreated ? (
        <Container>
          <TextBox>
            Before starting your project, it is essential{' '}
            <Link onClick={openModal}>to create a board</Link> to visualize and
            track all the necessary tasks and milestones. This board serves as a
            powerful tool to organize the workflow and ensure effective
            collaboration among team members.
          </TextBox>
          {isModalOpen && (
            <AddBoardModal
              onClose={closeModal}
              onBoardCreated={handleBoardCreated}
            />
          )}
        </Container>
      ) : (
        <div>
          <h2>New Board: {boardName}</h2>
          <button>Add Column</button>
        </div>
      )}
    </>
  );
};

export default Board;
