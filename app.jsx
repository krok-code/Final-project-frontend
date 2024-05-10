import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'lib/index';
import BoardCardActions from './src/components/Card/CardActions';
import BoardCardDeadline from './src/components/Card/CardDeadline';
import BoardCardPriority from './src/components/Card/CardPriority';
require = require("esm")(module);


const Card = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['Low', 'Medium', 'High', 'Without priority']).isRequired,
  deadline: PropTypes.string.isRequired,
});

export const BoardCard = ({ card }) => {
  return (
    <div
      className={cn(
        `h-[154px] w-[335px] rounded-lg border-l-4 bg-white py-default pl-6 pr-5
        dark:bg-black`,
        card.priority === 'Without priority' && 'border-black/30 dark:border-white/30',
        card.priority === 'High' && 'border-brand',
        card.priority === 'Medium' && 'border-priority-medium',
        card.priority === 'Low' && 'border-priority-low'
      )}>
      <p className='mb-2 text-fs-14-lh-normal-fw-600'>{card.title}</p>
      <p
        className='mb-default line-clamp-2 text-fs-12-lh-normal-fw-400 text-black/70
          dark:text-white/50'>
        {card.description}
      </p>
      <div className='flex items-end border-t-2 border-black/10 pt-default dark:border-white/10'>
        <BoardCardPriority priority={card.priority} />
        <BoardCardDeadline deadline={card.deadline} />
        <BoardCardActions card={card} />
      </div>
    </div>
  )
};

BoardCard.propTypes = {
  card: Card.isRequired,
};

const App = () => {
 
  const cardData = {
    _id: "1",
    title: "Test Card",
    column: "Test Column",
    board: "Test Board",
    description: "This is a test card.",
    priority: "High",
    deadline: "2022-12-31",
  };

  return (
    <div>
      <BoardCard card={cardData} />
    </div>
  );
};

export default App;