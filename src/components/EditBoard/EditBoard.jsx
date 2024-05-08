import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { editColumnSchema } from 'components/validation/schema';
import {
  Input,
  Error,
  Form,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import {
  DefaultRadioBtn,
  CustomRadioBtn,
  BgcItem,
  FormWrapper,
  RadioBtnWrapper,
  FormTitle,
  Icon,
  IconWrapper,
} from '../AddBoard/AddBoard.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import { useState } from 'react';
import data from '../../assets/fonts/images/backs-small/backs.json';
import { editBoard } from '../../redux/cards/cardsReducers';

const EditBoard = ({ item, _id }) => {
  const [bgdImg, setBgdImg] = useState('');
  const { _id, name, icon, backgroundURL } = item;
  const [icons, setIcon] = useState('');
  const dispatch = useDispatch();

  const options = [
    '#icon-Project',
    '#icon-star',
    '#icon-loading',
    '#icon-puzzle-piece',
    '#icon-container',
    '#icon-lightning',
    '#icon-colors',
    '#icon-hexagon',
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      text: '',
      icon: icons,
      bgd: bgdImg,
    },
    resolver: yupResolver(editColumnSchema),
  });

  const onSubmit = values => {
    const { text, icon, backgroundURL } = values;
    const updatedData = { name: text, icon, backgroundURL };
    dispatch(editBoard({ boardId: _id, updatedData }));

    reset();
  };

  const handleBgDImg = url => {
    setBgdImg(url);
  };

  const handleIcon = el => {
    setIcon(el);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="text"
        placeholder="Project office"
        {...register('text')}
        error={touched.text && errors.text && errors.text.message}
      />
      {errors.text && <Error>{errors.text.message}</Error>}
      <FormWrapper>
        <FormTitle>Icons </FormTitle>
        <RadioBtnWrapper>
          {options.map((el, idx) => (
            <IconWrapper key={idx}>
              <Icon
                className={icon === el ? 'active' : ''}
                onClick={() => handleIcon(el)}
                width={18}
                height={18}
              >
                <use href={sprite + el} width={18} height={18} />
              </Icon>

              <DefaultRadioBtn type="radio" value={el} name="icon" />
            </IconWrapper>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>

      <FormWrapper>
        <FormTitle>Backgrounds </FormTitle>
        <RadioBtnWrapper>
          {data.map((el, idx) => (
            <label key={idx}>
              <BgcItem
                onClick={() => handleBgDImg(el.url)}
                className={bgdImg === el.url ? 'active' : ''}
              >
                {el.url !== '' && (
                  <CustomRadioBtn
                    url={el.url}
                    onClick={() => handleBgDImg(el.url)}
                    className={bgdImg === el.url ? 'active' : ''}
                  />
                )}
              </BgcItem>

              <DefaultRadioBtn type="radio" value={el.url} name="bg" />
            </label>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>

      <ButtonPlus type="submit" approve="true" text="Create" />
    </Form>
  );
};

export default EditBoard;
