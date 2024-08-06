import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import CustomModal from "../common/custom-modal/CustomModal";
import CustomTitle from "../common/custom-title/CustomTitle";
import { updateUser } from "../../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import ProfileSchema from "./ProfileSchema";
import CustomField from "../common/custom-field/CustomField";
import CustomButton from "../common/custom-button/CustomButton";
import ProfilePic from "../common/profile-pic/ProfilePic";

const btnStyle = {
  marginTop: 9,
};

const ProfileModal = ({ open, close }) => {
  const { name, email, avatar } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClose = () => {
    close();
  };

  return (
    <CustomModal open={open} onClose={handleClose}>
      <CustomTitle>Edit profile</CustomTitle>
      <Formik
        initialValues={{
          name,
          email,
          password: "",
          avatar,
        }}
        validationSchema={ProfileSchema}
        onSubmit={({ name, email, avatar, password }) => {
          const user = {
            name,
            email,
            password,
          };

          dispatch(updateUser({ user, avatar }));
          handleClose();
        }}
      >
        {() => (
          <Form>
            <Field name="avatar" component={ProfilePic} />
            <Field
              name="name"
              label="Name"
              component={CustomField}
              type="small-gap"
            />
            <Field
              name="email"
              label="Email"
              component={CustomField}
              type="small-gap"
            />
            <Field
              name="password"
              label="Password"
              component={CustomField}
              type="small-gap"
            />
            <CustomButton btnType="without-icon" style={btnStyle}>
              Send
            </CustomButton>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

ProfileModal.propTypes = {
  close: PropTypes.func,
  open: PropTypes.bool,
};

export default ProfileModal;
