import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { support } from '../../redux/support/operations';

import sprite from '../../assets/svgSprite/iconsSprite.svg';

import {
  NeedHelpInner,
  NeedHelpInnerText,
  CloseButton,
} from './NeedHelp.styled';

const NeedHelp = ({ onClose }) => {
  const supportSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required!'),
    text: Yup.string().required('Comment is required!'),
  });

  const handleClose = () => {
    onClose();
  };

  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const email = value.email;
    const text = value.text;

    dispatch(
      support({
        email,
        text,
      })
    );
    resetForm();
    handleClose();
  };

  const initialValues = {
    email: '',
    text: '',
  };
  return (
    <NeedHelpInner>
      <NeedHelpInnerText className="NeedHelpInner__text">
        Need help
      </NeedHelpInnerText>
      <Formik
        initialValues={initialValues}
        validationSchema={supportSchema}
        onSubmit={handleSubmit}
      >
        <Form className="NeedHelpInnerForm">
          <Field
            className="NeedHelpInnerEmail"
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <Field
            className="NeedHelpInnerComment"
            id="text"
            name="text"
            as="textarea"
            placeholder="Comment"
          ></Field>
          <button className="NeedHelpInnerBtn" type="submit">
            Send
          </button>
        </Form>
      </Formik>
      <CloseButton onClick={handleClose}>
        <use href={`${sprite}#close`} />
      </CloseButton>
    </NeedHelpInner>
  );
};

export default NeedHelp;
