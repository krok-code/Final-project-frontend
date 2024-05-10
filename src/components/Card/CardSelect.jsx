import PropTypes from 'prop-types';
import * as Select from '@radix-ui/react-select';

import { useAppMutation, useGetBoardById } from './HooksForCard';

import { cardService } from 'services/card.service';

const Card = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['Low', 'Medium', 'High', 'Without priority']).isRequired,
  deadline: PropTypes.string.isRequired,
});

export const BoardCardColumnSelect = ({ card }) => {
  const columns = useGetBoardById().data?.columns;

  const filteredColumns = columns?.filter(column => column._id !== card.column);

  const { mutate } = useAppMutation({
    mutationKey: ['changeCardColumn'],
    mutationFn: columnId =>
      cardService.changeCardColumn(card.board, card.column, card._id, columnId)
  });

  return (
    <Select.Root
      onValueChange={mutate}
      disabled={columns && columns.length <= 1}>
      <Select.Trigger className='disabled:hidden'>
        <svg
          className='size-4 stroke-black/50 hocus:stroke-black dark:stroke-white/50
            dark:hocus:stroke-white'>
          <use href='/icons.svg#icon-arrow'></use>
        </svg>
      </Select.Trigger>
      <Select.Content
        position='popper'
        className='w-min rounded-lg border border-brand bg-white-primary p-[18px] shadow-select
          data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
          violet:border-white-gray-secondary dark:bg-black-fourth'>
        {filteredColumns?.map(column => (
          <Select.Item
            key={column._id}
            className='mb-1 cursor-pointer text-fs-14-lh-1.28-fw-400 text-black dark:text-white/30'
            value={column._id}>
            <Select.ItemText>
              <div className='flex gap-2'>
                <span className='w-20 truncate'>{column.title}</span>
                <svg className='size-4 stroke-black/50 dark:stroke-white/50'>
                  <use href='/icons.svg#icon-arrow'></use>
                </svg>
              </div>
            </Select.ItemText>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

BoardCardColumnSelect.propTypes = {
  card: Card.isRequired,
};
