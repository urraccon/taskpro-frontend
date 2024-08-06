import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../../../redux/board/selectors";
import dayjs from "dayjs";
import CustomModal from "../common/custom-modal/CustomModal";
import CustomTitle from "../common/custom-title/CustomTitle";
import { Field, Form, Formik } from "formik";
import {
  addCard,
  fetchCard,
  updateCard,
} from "../../../redux/board/operations/cardOperations";
import CardSchema from "./CardSchema";
import CustomField from "../common/custom-field/CustomField";
import CustomRadioGroup from "../common/custom-radio-group/CustomRadioGroup";
import CustomButton from "../common/custom-button/CustomButton";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomDate from "../common/custom-date/CustomDate";
import "dayjs/locale/en-gb";

dayjs.locale("en-gb");

const CardModal = ({ id, columnId, close }) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("no-priority");
  const today = dayjs().startOf("day");
  const [deadline, setDeadline] = useState(today);
  const card = useSelector(selectCard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setAction("edit");
      dispatch(fetchCard(id));
    } else {
      setOpen(true);
    }
  }, [id]);

  useEffect(() => {
    if (card._id && id) {
      setTitle(card.title);
      setDescription(card.description);
      setPriority(card.priority);
      const parsedDeadline = dayjs(card.deadline);
      setDeadline(parsedDeadline);
      setOpen(true);
    }
  }, [card, id]);

  const handleClose = () => {
    close();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomModal open={open} onClose={handleClose}>
        <CustomTitle>{action === "add" ? "Add card" : "Edit card"}</CustomTitle>
        <Formik
          initialValues={{
            title,
            description,
            priority,
            deadline,
          }}
          validationSchema={CardSchema}
          onSubmit={(values) => {
            {
              action === "add"
                ? dispatch(addCard({ ...values, columnId }))
                : dispatch(updateCard({ values, id }));
            }
            handleClose();
          }}
          enableReinitialize={true}
        >
          {() => (
            <Form>
              <Field
                name="title"
                label="Title"
                component={CustomField}
                type="small-gap"
              />
              <Field
                name="description"
                label="Description"
                component={CustomField}
                type="small-gap"
                rows={6}
                multiline={true}
              />
              <CustomRadioGroup
                label="Label color"
                name="priority"
                type="priority"
                options={["no-priority", "low", "medium", "high"]}
              />
              <Field name="deadline" label="Deadline" component={CustomDate} />
              <CustomButton btnType="card">
                {action === "add" ? "Add" : "Edit"}
              </CustomButton>
            </Form>
          )}
        </Formik>
      </CustomModal>
    </LocalizationProvider>
  );
};

CardModal.propTypes = {
  id: PropTypes.string,
  close: PropTypes.func,
  columnId: PropTypes.string,
};

export default CardModal;
