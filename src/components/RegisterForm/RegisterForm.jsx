import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/operations';
import RegisterSchema from './RegisterSchema';
import {
  FormContainer,
  StyledForm,
  NavContainer,
  InputContainer,
  StyledInput,
  StyledErrorMessage,
  PassInputContainer,
  StyledInputPass,
  ShowHideButton,
  SubButton,
} from '../LoginForm/Form.styled';
import sprite from '../../assets/svgSprite/iconsSprite.svg';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const name = values.name;
    const email = values.email;
    const password = values.password;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    setSubmitting(false);
    resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
      <FormContainer>
        <StyledForm>
          <NavContainer>
            <Link className='activeLink' to='/auth/register'>
              Registration
            </Link>

            <Link className='link' to='/auth/login'>
              Log In
            </Link>
          </NavContainer>

          <InputContainer>
            <label htmlFor='name' />

            <StyledInput
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              autoComplete='off'
            />

            <StyledErrorMessage name='name' component='span' />
          </InputContainer>

          <InputContainer>
            <label htmlFor='email' />

            <StyledInput
              type='text'
              id='email'
              name='email'
              placeholder='Enter your email'
              autoComplete='off'
            />

            <StyledErrorMessage name='email' component='span' />
          </InputContainer>

          <PassInputContainer>
            <label htmlFor='password' />

            <StyledInputPass
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              placeholder='Enter your password'
              autoComplete='off'
            />

            <ShowHideButton type='button' onClick={togglePasswordVisibility}>
              {showPassword ? (
                <svg width='18' height='18' fill='none' className='icon'>
                  <use xlinkHref={`${sprite}#icon-vector`} />
                </svg>
              ) : (
                <svg width='18' height='18' fill='none' className='icon'>
                  <use xlinkHref={`${sprite}#icon-eye`} />
                </svg>
              )}
            </ShowHideButton>
          </PassInputContainer>

          <StyledErrorMessage name='password' component='span' />

          <SubButton type='submit'>Register Now</SubButton>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default RegisterForm;
