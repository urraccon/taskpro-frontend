import { Modal } from "@mui/material";
import { Container } from "./CustomModal.styles";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const CustomModal = ({ open, onClose, children }) => (
  <Modal open={open} onClose={onClose} sx={modalStyle}>
    <Container>{children}</Container>
  </Modal>
);

export default CustomModal;
