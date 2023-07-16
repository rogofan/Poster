import { Fragment, useState } from "react";
import style from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);
  function onClickCloseModal() {
    setIsClosing(true);
    setTimeout(() => {
      navigate("..");
    }, 300);
  }

  return (
    <Fragment>
      <div
        className={`${style.backdrop} ${isClosing ? style["fade-out"] : ""}`}
        onClick={onClickCloseModal}
      />
      <dialog
        open
        className={`${style.modal} ${isClosing ? style["fade-out"] : ""}`}
      >
        {children}
      </dialog>
    </Fragment>
  );
}

export default Modal;
