import EditColumnModal from 'components/Modals/EditColumnModal/EditColumnModal';
import EditProfileModal from 'components/Modals/EditProfileModal/EditProfileModal';

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
      <EditColumnModal />
    </div>
  );
};
