import AddColumModal from 'components/Modals/AddColumModal/AddColumnModal';

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
      <AddColumModal />
    </div>
  );
};
