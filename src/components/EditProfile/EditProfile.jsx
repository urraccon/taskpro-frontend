import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

import {
  AvatarContainer,
  AvatarImageContainer,
  CloseButton,
  EditProfileContent,
  EditProfileForm,
  EditProfileInput,
  InputContainer,
  PasswordInputContainer,
  ShowHideButton,
  StyledAvatarErrorMessage,
  StyledErrorMessage,
  SubmitButton,
  UploadAvatarButton,
} from './EditProfile.styled';
import sprite from '../../assets/svgSprite/iconsSprite.svg';

import { selectUser } from '../../redux/auth/selectors';
import { updateUser } from '../../redux/auth/operations';
import EditProfileSchema from './EditProfileSchema';

const getInitialValues = user => {
  return {
    name: user?.name || '',
    email: '',
    avatar: null,
    password: '',

    emailPlaceholder: user?.email || 'Email',
    avatarPreview: '',
  };
};

const EditProfile = ({ onClose }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const initialValues = useMemo(() => getInitialValues(user), [user]);

  const handleSubmit = ({ avatar, name, email, password }, { resetForm }) => {
    const formData = new FormData();
    avatar && formData.append('avatar', avatar);
    name && formData.append('name', name);
    email && formData.append('email', email);
    password && formData.append('password', password);

    dispatch(updateUser({ body: formData, cb: resetForm }));
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <EditProfileContent>
      <h2>Edit Profile</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={EditProfileSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setValues, dirty }) => {
          const userAvatar = values.avatarPreview || user.avatarURL;

          return (
            <EditProfileForm
              autoComplete="off"
              noValidate
              encType="multipart/form-data"
            >
              <InputContainer data-avatar>
                <AvatarContainer>
                  <AvatarImageContainer $bg={!userAvatar}>
                    {userAvatar ? (
                      <img src={userAvatar} alt="User avatar" />
                    ) : (
                      <svg>
                        <use href={`${sprite}#icon-user_default`} />
                      </svg>
                    )}
                  </AvatarImageContainer>

                  <Field
                    id="file"
                    name="file"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={event => {
                      const file = event.currentTarget.files[0];
                      const regex = /^image\/.*/;

                      setValues({
                        ...values,
                        avatar: file,
                        avatarPreview: regex.test(file.type)
                          ? URL.createObjectURL(file)
                          : '',
                      });
                    }}
                  />
                  <label htmlFor="file">
                    <UploadAvatarButton>
                      <svg>
                        <use href={`${sprite}#plus`} />
                      </svg>
                    </UploadAvatarButton>
                  </label>
                </AvatarContainer>

                <StyledAvatarErrorMessage name="avatar" component="span" />
              </InputContainer>

              <InputContainer>
                <EditProfileInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />

                <StyledErrorMessage name="name" component="span" />
              </InputContainer>

              <InputContainer>
                <EditProfileInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder={values.emailPlaceholder}
                />

                <StyledErrorMessage name="email" component="span" />
              </InputContainer>

              <InputContainer data-last-child>
                <PasswordInputContainer>
                  <EditProfileInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    data-type="password"
                  />

                  <ShowHideButton
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" fill="none">
                        <use href={`${sprite}#icon-vector`} />
                      </svg>
                    ) : (
                      <svg width="18" height="18" fill="none">
                        <use href={`${sprite}#icon-eye`} />
                      </svg>
                    )}
                  </ShowHideButton>
                </PasswordInputContainer>

                <StyledErrorMessage name="password" component="span" />
              </InputContainer>

              <SubmitButton type="submit" disabled={!dirty}>
                Send
              </SubmitButton>
            </EditProfileForm>
          );
        }}
      </Formik>

      <CloseButton onClick={handleClose}>
        <use href={`${sprite}#close`} />
      </CloseButton>
    </EditProfileContent>
  );
};

export default EditProfile;
