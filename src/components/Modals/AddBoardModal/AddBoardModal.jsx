// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';
import AddBoard from 'components/AddBoard/AddBoard';
import { CloseModalCross } from '../../mainModal/CloseModal';
import {
  ModalContainer,
  ModalTitle,
  ModalHeader,
} from '../EditProfileModal/EditProfileModal.styled';

const AddBoardModal = () => {
  return (
    // <Modal modalId={modalNames.ADD_BOARD}>
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>New board</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <AddBoard />
      </ModalContainer>
    </>
    // </Modal>
  );
};
export default AddBoardModal;
