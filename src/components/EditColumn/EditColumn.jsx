import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { editColumnSchema } from 'components/validation/schema';
import {
  Input,
  Error,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import { Icon, UserButton, Form, Wrap } from './EditColumn.styled';

const EditColumn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      text: '',
    },
    resolver: yupResolver(editColumnSchema),
  });

  const onSubmit = text => {
    console.log(text);
    if (!text || text.length < 3) {
      toast.error('Title must be at least 3 characters long');
      return;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="text"
        placeholder="Title"
        {...register('text')}
        error={touched.text && errors.text && errors.text.message}
      />
      {errors.text && <Error>{errors.text.message}</Error>}

      <ButtonPlus type="submit" approve="true" text="Add" />
    </Form>
  );
};

export default EditColumn;
