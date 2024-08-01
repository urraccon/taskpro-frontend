import * as Yup from 'yup';

const imageRegex = /^image\/.*/;

const EditProfileSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .test('is-valid-type', 'Loaded file is not a valid image', value => {
      if (!value) return true;

      return imageRegex.test(value.type);
    })
    .nullable(),
  name: Yup.string().max(128, 'Entered name is too long'),
  email: Yup.string().email('Please enter valid email'),
  password: Yup.string().min(8, 'Password must contain at least 8 symbols'),
});

export default EditProfileSchema;
