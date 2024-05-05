import AuthPage from 'components/Auth/Auth';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

import { Modal } from 'components/mainModal/MainModal';

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
      <EditProfileModal />
      {/* <Modal /> */}
    </div>
  );
};
