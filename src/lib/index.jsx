import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Card = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['Low', 'Medium', 'High', 'Without priority']).isRequired,
  deadline: PropTypes.string.isRequired,
});

export const cn = (...inputs) => twMerge(clsx(inputs));

export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'Low':
      return 'bg-priority-low';
    case 'Medium':
      return 'bg-priority-medium';
    case 'High':
      return 'bg-brand';
    default:
      return 'bg-black/30 dark:bg-white/30';
  }
};

export const getVisibleCards = (cards, filter) => {
  if (!filter) return cards;

  return cards.filter(card => card.priority === filter);
};
