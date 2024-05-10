import FiltersModal from 'components/Modals/FiltersModal/FiltersModal';

import { Header, Title } from './HeaderDashbord.setyled';

const HeaderDashboard = ({ children }) => {
  return (
    <Header>
      <Title>{children}</Title>

      <FiltersModal />
    </Header>
  );
};

export default HeaderDashboard;
