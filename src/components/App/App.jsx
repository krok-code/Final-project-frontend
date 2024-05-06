import AuthPage from 'components/Auth/Auth';
import EditProfileModal from '../Modals/EditProfileModal/EditProfileModal';

import { Modal } from 'components/mainModal/MainModal';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import NeedHelpModal from 'components/Modals/NeedHelpModals/NeedHelpModal';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <AuthPage /> */}
      {/* <EditProfileModal /> */}
      {/* <Modal /> */}
      <NeedHelpModal />
    </div>
  );
};
