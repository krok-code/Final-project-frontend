import PropTypes from 'prop-types';
import { isBefore, isToday } from 'date-fns';
import { useModal } from 'react-modal-state';

import { Button } from './button/button';

import { useAppMutation, useGetBoardId } from './HooksForCard';

import { cardService } from 'services/card.service';

import { BoardCardColumnSelect } from './CardSelect';

const Card = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['Low', 'Medium', 'High', 'Without priority']).isRequired,
  deadline: PropTypes.string.isRequired,
});

export const BoardCardActions = ({ card }) => {
  const boardId = useGetBoardId();

  const isTodayDeadline = isToday(card.deadline);
  const isDeadlinePassed = isBefore(card.deadline, new Date());

  const { mutate } = useAppMutation({
    mutationKey: ['deleteCard'],
    mutationFn: () => cardService.deleteCard(boardId, card.column, card._id)
  });

  const { open } = useModal('edit-card-modal');

  return (
    <div className='ml-auto flex gap-2'>
      {isTodayDeadline && (
        <svg className='size-[19px] animate-bounce stroke-brand pr-1 violet:stroke-brand-secondary'>
          <use href='/icons.svg#icon-bell'></use>
        </svg>
      )}
      {isDeadlinePassed && !isTodayDeadline && (
        <svg className='size-[19px] animate-bounce stroke-red-500 pr-1'>
          <use href='/icons.svg#icon-bell'></use>
        </svg>
      )}
      <BoardCardColumnSelect card={card} />
      <Button
        onClick={() => open(card)}
        iconName='pencil'
      />
      <Button
        onClick={() => mutate()}
        iconName='trash'
      />
    </div>
  );
};

BoardCardActions.propTypes = {
  card: Card.isRequired,
};
