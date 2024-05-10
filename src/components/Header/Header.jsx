import Burger from 'assets/fonts/images/icons/Burger';
import EditProfileModal from 'components/Modals/EditProfileModal/EditProfileModal';
import {
  HeaderSection,
  BurgerBtn,
  HeaderUserWrap,
  UserText,
  UserButton,
  Avatar,
  UserLogoContainer,
  UserNameText,
  Ava,
} from './Header.styled';
import { selectUserData } from '../../redux/selectors';
import React, { useState } from 'react';
import userLight from '../../assets/fonts/images/userLogo/userLight.jpg';
import userDark from '../../assets/fonts/images/userLogo/userDark.jpg';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Header = () => {
  const user = useSelector(selectUserData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const avatarURL = useSelector(state => state.avatarURL);
  const theme = useSelector(state => state.auth.theme);
  const [fileImage, setFileImage] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(avatarURL);
  const userData = useSelector(selectUserData);
  const userEmail = userData?.email ?? 'Sign in';
  const userEmailSplit = userEmail.split('@')[0];
  const userName = userData?.userName;
  const userAvatar = userData?.avatarURL;

  const handleFileSelect = event => {
    const file = event.target.files[0];

    if (file.size > 50 * 1024) {
      toast.error('The file size must not exceed 50 KB');
      return;
    }

    if (file) {
      setFileImage(file);
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedAvatar(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderSection>
      <BurgerBtn type="button">
        <Burger width={24} height={24} fillColor={'#161616'} />
      </BurgerBtn>
      <UserLogoContainer onClick={openModal}>
        {userName ? (
          <div>
            <UserNameText>{userName}</UserNameText>
          </div>
        ) : (
          <div>{userEmailSplit}</div>
        )}
        {userAvatar ? (
          <Avatar src={userAvatar} alt="userPhoto" />
        ) : (
          <Ava
            src={selectedAvatar || (theme === 'light' ? userLight : userDark)}
            alt="Avatar"
          />
        )}
      </UserLogoContainer>
      {isModalOpen && <EditProfileModal onClose={closeModal} />}
    </HeaderSection>
  );
};

export default Header;
