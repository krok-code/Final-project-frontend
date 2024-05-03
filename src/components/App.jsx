import WelcomePage from 'pages/WelcomePg/WelcomePg';
import Registration from './RegistrationPg/RegistrationPg';

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
      <WelcomePage />
      {/* <Registration /> */}
      {/* <AuthPage /> */}
    </div>
  );
};
