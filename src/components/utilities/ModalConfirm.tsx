import Modal from "./Modal";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  text: string;
}

const ModalConfirm = (props: Props) => {
  const confirmAndCloseModal = () => {
    props.onConfirm();
    props.onClose();
  };
  return (
    <>
      <Modal onClose={props.onClose} title="Are you sure?">
        <p className="text">{props.text}</p>
        <div className="buttons">
          <button onClick={props.onClose}>Cancel</button>
          <button onClick={confirmAndCloseModal}>Confirm</button>
        </div>
      </Modal>
    </>
  );
};

export default ModalConfirm;
