import Burger from 'assets/fonts/images/icons/Burger';
import EditProfile from 'components/EditProfile/EditProfile';
import { HeaderSection, BurgerBtn, HeaderUserWrap } from './Header.styled';

const Header = ({ openMenu }) => {
  return (
    <HeaderSection>
      <BurgerBtn type="button" onClick={openMenu}>
        <Burger width={24} height={24} fillColor={'#161616'} />
      </BurgerBtn>

      <HeaderUserWrap>
        <EditProfile />
      </HeaderUserWrap>
    </HeaderSection>
  );
};

export default Header;
