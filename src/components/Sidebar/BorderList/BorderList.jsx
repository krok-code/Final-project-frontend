import React from 'react';
import { useSelector } from 'react-redux';
import BoardItem from '../BordItem/BordItem';
import { List } from './BorderList.styled';
import { useDispatch } from 'react-redux';
import { closeMenuMode } from '../../../redux/menu/menuSlice';
import { useState } from 'react';

const BoardList = () => {
  const boards = useSelector(state => state.dashboards.boards);
  console.log(boards);
  const dispatch = useDispatch();
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const switchActiveProject = idx => {
    setActiveProjectIndex(idx);
  };

  const handleActiveProject = idx => {
    switchActiveProject(idx);
    dispatch(closeMenuMode());
  };

  return (
    <List>
      {boards.map((item, idx) => (
        <BoardItem
          key={item._id}
          item={item}
          index={idx}
          onActive={handleActiveProject}
          activeProjectIndex={activeProjectIndex}
        />
      ))}
    </List>
  );
};

export default BoardList;
