import WelcomeMob1x from '../../assets/fonts/images/welcome/welcome-mob-1x.png';
import WelcomeMob2x from '../../assets/fonts/images/welcome/welcome-mob-2x.png';
import WelcomeTab1x from '../../assets/fonts/images/welcome/welcome-tab-1x.png';
import WelcomeTab2x from '../../assets/fonts/images/welcome/welcome-tab-2x.png';
import WelcomeDes1x from '../../assets/fonts/images/welcome/welcome-desk-1x.png';
import WelcomeDes2x from '../../assets/fonts/images/welcome/welcome-desk-2x.png';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import {
  Container,
  LogoWrap,
  AuthNavWrap,
  AuthRegisterLink,
  AuthLoginLink,
} from './WelcomePg.styled';

const Welcome = () => {
  return (
    <Container>
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet={`${WelcomeMob1x} 1x, ${WelcomeMob2x} 2x`}
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${WelcomeTab1x} 1x, ${WelcomeTab2x} 2x`}
        />

        <source
          media="(min-width: 1440px)"
          srcSet={`${WelcomeDes1x} 1x, ${WelcomeDes2x} 2x`}
        />

        <img
          src={WelcomeMob1x}
          srcSet={`${WelcomeMob1x} 1x, ${WelcomeMob2x} 2x`}
          alt="logo"
        />
      </picture>

      <LogoWrap>
        <span>
          {' '}
          <use href={sprite + '#logo'} />
        </span>
        <h1>Task Pro</h1>
      </LogoWrap>

      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>

      <AuthNavWrap>
        <AuthRegisterLink to="/auth/register">Registration</AuthRegisterLink>
        <AuthLoginLink to="/auth/login">Log In</AuthLoginLink>
      </AuthNavWrap>
    </Container>
  );
};

export default Welcome;
