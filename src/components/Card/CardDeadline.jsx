import PropTypes from 'prop-types';
import { format } from 'date-fns';

const Card = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['Low', 'Medium', 'High', 'Without priority']).isRequired,
  deadline: PropTypes.string.isRequired,
});

export const BoardCardDeadline = ({ deadline }) => (
  <div>
    <p className='pb-1 text-fs-8-lh-normal-fw-400 text-black/50 dark:text-white/50'>
      Deadline
    </p>
    <p className='text-fs-10-lh-normal-fw-400'>
      {format(deadline, 'dd/MM/yyyy')}
    </p>
  </div>
);

BoardCardDeadline.propTypes = {
  deadline: PropTypes.string.isRequired,
};
