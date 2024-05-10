import FiltersModal from 'components/Modals/FiltersModal/FiltersModal';

const HeaderDashboard = ({ board }) => {
  return (
    <div>
      <h2>{board?.name}</h2>
      <FiltersModal />
    </div>
  );
};

export default HeaderDashboard;
