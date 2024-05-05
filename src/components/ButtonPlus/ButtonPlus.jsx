import { Button } from './ButtonPlus.styled';

const ButtonPlus = ({ text, iconSrc, approve, onBtnClick }) => {
  return (
    <Button type="button" onClick={onBtnClick} approve={approve}>
      {text}
    </Button>
  );
};

export default ButtonPlus;
