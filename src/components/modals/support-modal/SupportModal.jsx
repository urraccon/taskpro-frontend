import PropTypes from "prop-types";
import CustomModal from "../common/custom-modal/CustomModal";
import CustomTitle from "../common/custom-title/CustomTitle";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { support } from "../../../redux/support/operations";
import SupportSchema from "./SupportSchema";
import CustomField from "../common/custom-field/CustomField";
import CustomButton from "../common/custom-button/CustomButton";

const btnStyle = {
  marginTop: 9,
};

const SupportModal = ({ open, close }) => {
  const dispatch = useDispatch();

  return (
    <CustomModal open={open} onClose={close}>
      <CustomTitle>Need help</CustomTitle>
      <Formik
        initialValues={{
          email: "",
          comment: "",
        }}
        validationSchema={SupportSchema}
        onSubmit={(values) => {
          dispatch(support(values));
          close();
        }}
      >
        {() => (
          <Form>
            <Field
              name="email"
              label="Email Address"
              component={CustomField}
              type="small-gap"
            />
            <Field
              name="comment"
              label="Comment"
              component={CustomField}
              type="small-gap"
              rows={5}
              multiline={true}
            />
            <CustomButton type="submit" btnType="support" style={btnStyle}>
              Send
            </CustomButton>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

SupportModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};

export default SupportModal;
