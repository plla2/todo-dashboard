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
    <div onClick={closeModalHandler}>
      <section>
        <h2>{props.title}</h2>
        <button className="closeBtn">
          <SvgX />
        </button>
        {props.children}
      </section>
    </div>
  );
};

const Modal = (props: Props) => {
  return (
    <>
      <div>
        <ModalContent
          children={props.children}
          onClose={props.onClose}
          title={props.title}
        />
      </div>
    </>
  );
};

export default Modal;
