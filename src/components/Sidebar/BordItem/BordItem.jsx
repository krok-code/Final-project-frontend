import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteDashboard,
  getDashboardById,
} from '../../../redux/cards/cardsReducers';
import { closeMenuMode } from '../../../redux/menu/menuSlice';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
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

const BoardItem = ({ item, idx, onActive, activeProjectIndex }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const checkTextLength = text => {
    if (text) {
      const str = text.split('');

      if (str.length <= 10) {
        return str.join('');
      }
      return str.splice(0, 10).join('') + '...';
    }
    return '';
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
        className={activeProjectIndex === idx ? 'active' : ''}
        draggable={false}
        onDragStart={handleDragStart}
        onContextMenu={handleContextMenu}
      >
        <StyledLink to={item.path}>
          <Board>
            <BoardIcon className={activeProjectIndex === idx ? 'active' : ''}>
              <use href={sprite + item.icon} />
            </BoardIcon>

            <BoardTitle
              onClick={() => {
                onActive(idx);
                dispatch(closeMenuMode());
                dispatch(getDashboardById(item._id));
              }}
              className={activeProjectIndex === idx ? 'active' : ''}
            >
              {checkTextLength(item.name)}
            </BoardTitle>
          </Board>
          <IconsBlock>
            {open && (
              <IconEdit aria-label="edit icon" onClick={handleOpen}>
                <use href={sprite + `#icon-pencil`} />
              </IconEdit>
            )}

            <IconDel
              aria-label="delete icon"
              onClick={() => {
                dispatch(deleteDashboard(item._id));
              }}
            >
              <use href={sprite + `#icon-trash`} />
            </IconDel>
          </IconsBlock>
        </StyledLink>
      </Item>

      {/* <EditBoardModal onClose={handleClose} /> */}
    </>
  );
};

export default BoardItem;
