import { CloseModalCross } from '../mainModal/CloseModal';

import { modalNames } from '../../constant/constant';
import {
  ModalContainer,
  ModalTitle,
  ModalHeader,
} from './EditProfileModal.styled';
import { Modal } from '../mainModal/MainModal';
import EditProfile from 'components/EditProfile/EditProfile';

const EditProfileModal = () => {
  return (
    // <Modal modalId={modalNames.EDIT_PROFILE}>
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit profile</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <EditProfile />
      </ModalContainer>
    </>
    // </Modal>
  );
};

export default EditProfileModal;
