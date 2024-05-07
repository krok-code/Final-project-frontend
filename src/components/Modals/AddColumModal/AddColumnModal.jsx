// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';
import { CloseModalCross } from '../../mainModal/CloseModal';
import {
  ModalContainer,
  ModalTitle,
  ModalHeader,
} from '../EditProfileModal/EditProfileModal.styled';
import AddColumn from 'components/AddColumn/AddColumn';
const AddColumModal = () => {
  return (
    // <Modal modalId={modalNames.ADD_COLUMN}>
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add column</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <AddColumn />
      </ModalContainer>
    </>
    // </Modal>
  );
};
export default AddColumModal;
