import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/operations';
import LoginSchema from './LoginSchema';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
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
} from './Form.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const email = values.email;
    const password = values.password;

    dispatch(
      logIn({
        email,
        password,
      })
    );

    resetForm();
    setSubmitting(false);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
      <FormContainer>
        <StyledForm autoComplete='off'>
          <NavContainer>
            <Link className='link' to='/auth/register'>
              Registration
            </Link>

            <Link className='activeLink' to='/auth/login'>
              Log In
            </Link>
          </NavContainer>

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

          <label htmlFor='password' />
          <PassInputContainer>
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

          <SubButton type='submit'>Log In Now</SubButton>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default LoginForm;
