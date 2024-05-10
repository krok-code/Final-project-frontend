import css from './ScreensPage.module.css';
import { useParams } from 'react-router-dom';
import { selectBoards } from '../../redux/board/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentBoardId } from '../../redux/board/boardSlice';
import { useDispatch } from 'react-redux';

import HeaderDashboard from '../dashboard/HeaderDashboard/HeaderDashboard';
import MainDashboard from '../dashboard/MainDashboard/MainDashboard';

const ScreensPage = () => {
  const { boardId } = useParams();
  const boards = useSelector(selectBoards);
  const currentBoard = boards.find(board => board._id === boardId);
  const bgImg = require(`../../images/card/background-desktop/${
    currentBoard?.background ?? '2'
  }@2x.jpg`);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentBoardId(boardId));
  });

  return (
    <div
      style={
        currentBoard?.background !== '1'
          ? {
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }
          : {}
      }
      className={css.screensWrap}
    >
      <HeaderDashboard board={currentBoard} />
      <MainDashboard board={currentBoard} />
    </div>
  );
};

export default ScreensPage;
