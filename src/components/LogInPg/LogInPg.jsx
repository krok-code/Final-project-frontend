import { logInSchema } from '../../components/validation/schema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Eye } from 'assets/fonts/images/icons/Eye';
import { EyeSlash } from 'assets/fonts/images/icons/EyeSlash';
import { registration } from '../../redux/authorization/authReducer';
import { toast } from 'react-toastify';

import {
  Wrap,
  Input,
  Button,
  Form,
  Error,
} from '../RegistrationPg/RegistrationPg.styled';

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const swapPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInSchema,
  });

  const onSubmit = data => {
    dispatch(registration(data))
      .unwrap()
      .then(() => {
        register('email').value = '';
        register('password').value = '';

        toast.success('Registration successful!');
      })
      .catch(() => {
        toast.error('Please write a correct email or password!');
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email')}
          $error={errors.email}
        />
        {errors.email && <Error>{errors.email.message}</Error>}

        <Wrap>
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Create a password"
            autoComplete="off"
            {...register('password')}
            $error={errors.password}
          />
          <button type="button" onClick={swapPassword}>
            {showPassword ? <Eye /> : <EyeSlash />}
          </button>
          {errors.password && <Error>{errors.password.message}</Error>}
        </Wrap>

        <Button type="submit" disabled={!isValid}>
          Log In
        </Button>
      </Form>
    </>
  );
}

export default LogIn;
