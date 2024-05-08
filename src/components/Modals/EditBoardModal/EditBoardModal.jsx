// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';

import EditBoard from 'components/EditBoard/EditBoard';
import { CloseModalCross } from '../../mainModal/CloseModal';
import {
  ModalContainer,
  ModalTitle,
  ModalHeader,
} from '../EditProfileModal/EditProfileModal.styled';

const EditBoardModal = () => {
  return (
    // <Modal modalId={modalNames.EDIT_BOARD}>
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit board</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <EditBoard />
      </ModalContainer>
    </>
    // </Modal>
  );
};
export default EditBoardModal;
