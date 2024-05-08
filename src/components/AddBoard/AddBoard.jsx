// import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
// import { editColumnSchema } from 'components/validation/schema';
// import {
//   Input,
//   Error,
//   Form,
// } from 'components/Auth/RegistrationPg/RegistrationPg.styled';
// import {
//   DefaultRadioBtn,
//   CustomRadioBtn,
//   BgcItem,
//   FormWrapper,
//   RadioBtnWrapper,
//   FormTitle,
//   Icon,
//   IconWrapper,
// } from './AddBoard.styled';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useDispatch } from 'react-redux';
// import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
// import { useState } from 'react';
// import data from '../../assets/fonts/images/backs-small/backs.json';
// import { addBoard } from '../../redux/cards/cardsReducers';

const AddBoard = () => {
  // const [bgdImg, setBgdImg] = useState('');
  // const [icons, setIcon] = useState('');
  // const dispatch = useDispatch();
  // const options = [
  //   '#icon-Project',
  //   '#icon-star',
  //   '#icon-loading',
  //   '#icon-puzzle-piece',
  //   '#icon-container',
  //   '#icon-lightning',
  //   '#icon-colors',
  //   '#icon-hexagon',
  // ];
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, touched = {} },
  //   reset,
  // } = useForm({
  //   mode: 'onBlur',
  //   defaultValues: {
  //     text: '',
  //     icon: icons,
  //     bgd: bgdImg,
  //   },
  //   resolver: yupResolver(editColumnSchema),
  // });
  // const onSubmit = values => {
  //   const { bgd, icon, text } = values;
  //   const board = {
  //     name: values.text,
  //     backgroundURL: bgdImg,
  //     icon,
  //   };
  //   const alreadyExists = board.findIndex(item => {
  //     const name = item.name.toLowerCase();
  //     const newName = board.name.toLowerCase();
  //     return name === newName;
  //   });
  //   if (alreadyExists >= 0) {
  //     return `${board.name} is already added to contact list`;
  //   } else {
  //     dispatch(addBoard(board));
  //   }
  //   reset();
  // };
  // const handleBgDImg = url => {
  //   setBgdImg(url);
  // };
  // const handleIcon = el => {
  //   setIcon(el);
  // };
  // return (
  //   <Form onSubmit={handleSubmit(onSubmit)}>
  //     <Input
  //       type="text"
  //       id="text"
  //       placeholder="Title"
  //       {...register('text')}
  //       error={touched.text && errors.text && errors.text.message}
  //     />
  //     {errors.text && <Error>{errors.text.message}</Error>}
  //     <FormWrapper>
  //       <FormTitle>Icons </FormTitle>
  //       <RadioBtnWrapper>
  //         {options.map((el, idx) => (
  //           <IconWrapper key={idx}>
  //             <Icon
  //               className={icons === el ? 'active' : ''}
  //               onClick={() => handleIcon(el)}
  //               width={18}
  //               height={18}
  //             >
  //               <use href={sprite + el} width={18} height={18} />
  //             </Icon>
  //             <DefaultRadioBtn type="radio" value={el} name="icon" />
  //           </IconWrapper>
  //         ))}
  //       </RadioBtnWrapper>
  //     </FormWrapper>
  //     <FormWrapper>
  //       <FormTitle>Backgrounds </FormTitle>
  //       <RadioBtnWrapper>
  //         {data.map((el, idx) => (
  //           <label key={idx}>
  //             <BgcItem
  //               onClick={() => handleBgDImg(el.url)}
  //               className={bgdImg === el.url ? 'active' : ''}
  //             >
  //               {el.url !== '' && (
  //                 <CustomRadioBtn
  //                   url={el.url}
  //                   onClick={() => handleBgDImg(el.url)}
  //                   className={bgdImg === el.url ? 'active' : ''}
  //                 />
  //               )}
  //             </BgcItem>
  //             <DefaultRadioBtn type="radio" value={el.url} name="bg" />
  //           </label>
  //         ))}
  //       </RadioBtnWrapper>
  //     </FormWrapper>
  //     <ButtonPlus type="submit" approve="true" text="Create" />
  //   </Form>
  // );
};

export default AddBoard;
