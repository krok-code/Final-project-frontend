import { useDispatch } from 'react-redux';
import { CloseModalCrossStyled } from './CloseModalCross.styled';
import { closeModal } from 'redux/modal/modalSlice';

export const CloseModalCross = () => {
  const dispatch = useDispatch();
  return (
    <CloseModalCrossStyled type="button" onClick={() => dispatch(closeModal())}>
      x
    </CloseModalCrossStyled>
  );
};
