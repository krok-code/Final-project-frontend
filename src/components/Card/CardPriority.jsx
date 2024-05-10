import PropTypes from 'prop-types';
import { cn, getPriorityColor } from 'lib';

const Card = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['Low', 'Medium', 'High', 'Without priority']).isRequired,
  deadline: PropTypes.string.isRequired,
});

export const BoardCardPriority = ({ priority }) => (
  <div className='mr-default'>
    <p className='mb-1 text-fs-8-lh-normal-fw-400 text-black/50 dark:text-white/50'>
      Priority
    </p>
    <div className='flex items-center gap-1'>
      <div className={cn('size-3 rounded-full', getPriorityColor(priority))} />
      <p className='text-fs-10-lh-normal-fw-400'>
        {priority === 'Without priority' ? 'Without' : priority}
      </p>
    </div>
  </div>
);

BoardCardPriority.propTypes = {
  priority: PropTypes.string.isRequired,
};
