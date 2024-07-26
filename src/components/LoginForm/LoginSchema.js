import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required!'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z\d])[a-zA-Z\d!@#$%^&*()_+,\-.;:?]{8,64}$/,
      'Password must contain at least 8 symbols'
    )
    .required('Password is required!'),
});

export default LoginSchema;
