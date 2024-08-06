import { useSelector } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import { Avatar, AvatarContainer, Container } from "./ProfilePic.styles";
import { selectUser } from "../../../../redux/auth/selectors";
import { useField } from "formik";

const ProfilePic = (props) => {
  const { name, value } = props.field;
  const [field, helpers] = useField(name);
  const user = useSelector(selectUser);

  const handleChange = (avatar) => {
    helpers.setValue(avatar);
  };

  return (
    <Container>
      <AvatarContainer>
        <Avatar
          alt={`${user.name} avatar`}
          src={`/TaskPro/public/avatars/${value}`}
        />
      </AvatarContainer>
      <CustomButton btnType="profile" />
    </Container>
  );
};

export default ProfilePic;
