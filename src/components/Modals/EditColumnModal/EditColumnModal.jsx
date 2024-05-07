// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';
import { CloseModalCross } from '../../mainModal/CloseModal';
import EditColumn from '../../EditColumn/EditColumn';
import {
  ModalContainer,
  ModalTitle,
  ModalHeader,
} from '../EditProfileModal/EditProfileModal.styled';
const EditColumnModal = () => {
  return (
    // <Modal modalId={modalNames.EDIT_COLUMN}>
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit column</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <EditColumn />
      </ModalContainer>
    </>
    // </Modal>
  );
};
export default EditColumnModal;
