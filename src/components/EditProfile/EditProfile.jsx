import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'; // Import useForm
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import { updateUser } from '../../redux/authorization/authReducer'; // Import updateUser action
import userLight from '../../assets/fonts/images/userLogo/userLight.jpg';
import userDark from '../../assets/fonts/images/userLogo/userDark.jpg';
import { registrationSchema } from 'components/validation/schema';
import {
  Wrapper,
  UserButton,
  Image,
  Icon,
  HiddenInput,
  Avatar,
  AvatarImg,
} from './EditProfile.styled.component';
import {
  Form,
  Button,
  Wrap,
  Input,
  Error,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import { toast } from 'react-toastify';

const EditProfile = () => {
  const dispatch = useDispatch();
  const avatarURL = useSelector(state => state.avatarURL);
  const theme = useSelector(state => state.theme);
  const [fileImage, setFileImage] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(avatarURL);

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(registrationSchema),
  });

  const handleFileSelect = event => {
    const file = event.target.files[0];

    if (file.size > 50 * 1024) {
      toast.error('The file size must not exceed 50 KB');
      return;
    }

    if (file) {
      setFileImage(file);
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedAvatar(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    if (fileImage) {
      formData.append('image', fileImage);
    }

    dispatch(updateUser(formData));
    console.log(formData);
  };

  return (
    <>
      <Wrapper>
        <Avatar
          src={selectedAvatar || (theme === 'dark' ? userLight : userDark)}
          alt="Avatar"
        />
        <UserButton
          onClick={() => document.querySelector('.input-field').click()}
        >
          <Icon>
            <use href={sprite + '#icon-plus'} />
          </Icon>
          <HiddenInput
            className="input-field"
            type="file"
            accept="image/*"
            name="imageURL"
            onChange={handleFileSelect}
          />
        </UserButton>
      </Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Enter your name"
          id="name"
          {...register('name')}
          error={touched.name && errors.name?.message}
        />
        {errors.name && <Error>{errors.name.message}</Error>}

        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register('email')}
          error={touched.email && errors.email?.message}
        />
        {errors.email && <Error>{errors.email.message}</Error>}

        <Wrap>
          <Input
            type="password"
            id="password"
            placeholder="Create a password"
            {...register('password')}
            error={touched.password && errors.password?.message}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Wrap>

        <Button type="submit">Send</Button>
      </Form>
    </>
  );
};

export default EditProfile;