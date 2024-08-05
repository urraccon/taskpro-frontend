import { useField } from "formik";
import {
  Container,
  SelectedDate,
  SelectedDateContainer,
  Error,
  Icon,
  IconContainer,
  IconPath,
  Title,
  Today,
} from "./CustomDate.styles";
import { DateCalendar } from "@mui/x-date-pickers";
import { Popover } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import icons from "../../../../assets/svgSprite/iconsSprite.svg";

const calendarStyle = {};

const containerStyle = (error) => ({
  marginBottom: !error && "15px",
});

const CustomDate = ({ label, ...props }) => {
  const { name } = props.field;
  const [field, meta, helpers] = useField(name);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [error, setError] = useState(null);
  const todayISODate = dayjs().startOf("day").toISOString();

  useEffect(() => {
    if (meta.touched && meta.error) {
      setError(meta.error);
    } else {
      setError(null);
    }
  }, [meta]);

  const handleChange = (date) => {
    helpers.setValue(date);
    handleClose();
  };

  const handleOpen = ({ target }) => {
    setAnchorEl(target);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatDate = ({ value }) => {
    const formattedDate = dayjs(value).format("MMMM D");
    return formattedDate;
  };

  const today = ({ value }) => {
    const ISOSelectedDate = dayjs(value).startOf("day").toISOString();
    if (ISOSelectedDate === todayISODate) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container style={containerStyle(error)}>
      <Title>{label}</Title>
      <SelectedDateContainer onClick={handleOpen}>
        <SelectedDate>
          <Today>{today(field) ? "Today, " : null}</Today>
          {formatDate(field)}
        </SelectedDate>
        <IconContainer>
          <Icon>
            <IconPath href={`${icons}#${open ? "collapse" : "expand"}`} />
          </Icon>
        </IconContainer>
      </SelectedDateContainer>
      {error && <Error>{error}</Error>}
      <Popover
        id="calendar"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <DateCalendar
          value={field.value}
          onChange={handleChange}
          sx={calendarStyle}
          views={["day"]}
          {...props}
        />
      </Popover>
    </Container>
  );
};

export default CustomDate;
