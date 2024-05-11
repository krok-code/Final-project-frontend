import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  deleteDashboard,
  getDashboardById,
} from '../../../redux/cards/cardsReducers';
import { closeMenuMode } from '../../../redux/menu/menuSlice';

import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';

import EditBoardModal from '../../Modals/EditBoardModal/EditBoardModal';
import {
  Board,
  BoardIcon,
  BoardTitle,
  IconDel,
  IconEdit,
  IconsBlock,
  Item,
  StyledLink,
} from './BordItem.styled';

const BoardItem = ({ item, index, onActive, activePojectIndex }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const checkTextLength = text => {
    if (text) {
      const str = text.split('');

      if (str.length <= 10) {
        return str.join('');
      }
      return str.splice(0, 10).join('') + '...';
    }
    return ''; // або яке-небудь інше значення за замовчуванням, якщо text === undefined
  };

  const handleDragStart = event => {
    event.preventDefault();
  };

  const handleContextMenu = event => {
    event.preventDefault();
  };

  return (
    <>
      <Item
        className={activePojectIndex === index ? 'active' : ''}
        draggable={false}
        onDragStart={handleDragStart}
        onContextMenu={handleContextMenu}
      >
        <StyledLink to={`${item.name}`}>
          <Board>
            <BoardIcon className={activePojectIndex === index ? 'active' : ''}>
              <use href={sprite + item.icon} />
            </BoardIcon>

            <BoardTitle
              onClick={() => {
                onActive(index);
                dispatch(closeMenuMode());
                dispatch(getDashboardById(item._id));
              }}
              className={activePojectIndex === index ? 'active' : ''}
            >
              {checkTextLength(item.name)}
            </BoardTitle>
          </Board>
          <IconsBlock>
            <IconEdit aria-label="edit icon" onClick={handleOpen}>
              <use href={sprite + `#icon-pencil`} />
            </IconEdit>

            <IconDel
              aria-label="delit icon"
              onClick={() => {
                dispatch(deleteDashboard(item._id));
              }}
            >
              <use href={sprite + `#icon-trash`} />
            </IconDel>
          </IconsBlock>
        </StyledLink>
      </Item>

      <EditBoardModal onClose={handleClose} />
    </>
  );
};

export default BoardItem;
