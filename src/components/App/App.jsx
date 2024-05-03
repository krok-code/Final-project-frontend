import AuthPage from 'components/Auth/Auth';
import LogIn from 'components/Auth/LogInPg/LogInPg';

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
      <AuthPage />
    </div>
  );
};
