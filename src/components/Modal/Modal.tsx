import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { ModalProps } from "@/types/types";
import * as styles from "./Modal.module.scss";

const Modal: React.FC<ModalProps> = ({
  open = false,
  onClose,
  children,
  size = "medium",
  title = "Modal",
  showCloseButton = true,
  backDropClickClose = true,
  showOpenModalButton = true,
}) => {
  const [isOpened, setIsOpened] = useState(open);

  const handleClick = () => {
    setIsOpened(true);
  };

  const handleCloseClick = () => {
    if (backDropClickClose) setIsOpened(false);

    if (onClose) onClose();
  };

  useEffect(() => {
    setIsOpened(open);
  }, [open]);

  return ReactDOM.createPortal(
    <>
      <div className={`${styles[size]}`}>
        {showOpenModalButton && !isOpened && (
          <button type="button" onClick={handleClick} className={styles["customModalButton"]}>
            Open Modal
          </button>
        )}
        {isOpened && (
          <div className={styles["customModal"]}>
            {showCloseButton && (
              <div className={styles["closeModalButton"]} onClick={handleCloseClick}>
                &#x2715;
              </div>
            )}
            {title && <h3>{title}</h3>}
            <div>{children}</div>
          </div>
        )}
      </div>
      {isOpened && <div className={styles["overlay"]} onClick={handleCloseClick}></div>}
    </>,
    document.body,
  );
};

export default Modal;
