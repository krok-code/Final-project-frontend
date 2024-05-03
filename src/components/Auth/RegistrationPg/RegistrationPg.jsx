import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from '../../../redux/authorization/authReducer';
import { toast } from 'react-toastify';
import { registrationSchema } from '../../validation/schema';
import { Wrap, Input, Button, Form, Error } from './RegistrationPg.styled';
import { yupResolver } from '@hookform/resolvers/yup';

function Registration() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {}, isValid },
  } = useForm({
    mode: 'onBlur', // Validate on blur
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = data => {
    console.log(data);
    dispatch(registration(data))
      .unwrap()
      .then(() => {
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
          type="text"
          placeholder="Enter your name"
          id="name"
          {...register('name')}
          $error={touched.name && errors.name}
        />
        {touched.name && errors.name && <Error>{errors.name}</Error>}

        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register('email')}
          $error={touched.email && errors.email}
        />
        {touched.email && errors.email && <Error>{errors.email}</Error>}

        <Wrap>
          <Input
            type="password"
            id="password"
            placeholder="Create a password"
            {...register('password')}
            $error={touched.password && errors.password}
          />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </Wrap>

        <Button type="submit" disabled={!isValid}>
          Register Now
        </Button>
      </Form>
    </>
  );
}

export default Registration;
