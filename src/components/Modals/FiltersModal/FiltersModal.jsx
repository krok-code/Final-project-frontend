// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';
import { CloseModalCross } from '../../mainModal/CloseModal';
import {
  ModalTitle,
  ModalHeader,
} from '../EditProfileModal/EditProfileModal.styled';
import { FiltersModalContainer } from './FiltersModal.styled';
//import Filters from 'components/Filters/Filters';

const FiltersModal = () => {
  return (
    // <Modal modalId={modalNames.FILTERS}>
    <>
      <FiltersModalContainer>
        <ModalHeader>
          <ModalTitle>Filters</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
  
      </FiltersModalContainer>
    </>
    // </Modal>
  );
};
export default FiltersModal;