import { Button, IconWrapper, Icon, Wrap } from './ButtonPlus.styled';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';

const ButtonPlus = ({ text, approve }) => {
  return (
    <Button type="submit" $approve={approve}>
      <Wrap>
        <IconWrapper>
          <Icon>
            <use href={sprite + '#icon-plus'} />
          </Icon>
        </IconWrapper>
        {text}
      </Wrap>
    </Button>
  );
};
export default ButtonPlus;
