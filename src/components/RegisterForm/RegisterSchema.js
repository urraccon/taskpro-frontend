import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required!')
    .min(2, 'Name is too Short!')
    .max(32, 'Name is too Long!'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required!'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z\d])[a-zA-Z\d!@#$%^&*()_+,\-.;:?]{8,64}$/,
      'Password must have at least 8 symbols'
    )
    .required('Password is required!'),
});

export default RegisterSchema;
