import ReactDOM from "react-dom";
import { ReactComponent as SvgX } from "../../assets/x.svg";
import "./modal.scss";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

const ModalContent = (props: Props) => {
  const closeModalHandler = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };
  return (
    <div onClick={closeModalHandler} className="backdrop">
      <section className="contents">
        <div className="modalHeader">
          <h2 className="modalTitle">{props.title}</h2>
          <button className="closeBtn" onClick={props.onClose}>
            <SvgX />
          </button>
        </div>
        <div className="modalChildren">{props.children}</div>
      </section>
    </div>
  );
};

const modalElement = document.getElementById("modal")! as HTMLElement;

const Modal = (props: Props) => {
  return ReactDOM.createPortal(
    <ModalContent
      children={props.children}
      onClose={props.onClose}
      title={props.title}
    />,
    modalElement
  );
};

export default Modal;
