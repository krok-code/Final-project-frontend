import { registrationSchema } from '../../validation/schema';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from '../../../redux/authorization/authReducer';
import { toast } from 'react-toastify';

import { Wrap, Input, Button, Form, Error } from './RegistrationPg.styled';

function Registration() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registrationSchema,
  });

  const onSubmit = data => {
    dispatch(registration(data))
      .unwrap()
      .then(() => {
        register('name').value = '';
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
          type="name"
          placeholder="Enter your name"
          id="name"
          name="name"
          autoComplete="off"
          {...register('name')}
          $error={errors.name}
        />
        {errors.name && <Error>{errors.name.message}</Error>}

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
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            autoComplete="off"
            {...register('password')}
            $error={errors.password}
          />

          {errors.password && <Error>{errors.password.message}</Error>}
        </Wrap>

        <Button type="submit" disabled={!isValid}>
          Register Now
        </Button>
      </Form>
    </>
  );
}

export default Registration;
