import { useEffect, useRef } from 'react';
import './style.css';

type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export const Modal = ({
  openModal,
  closeModal,
  children,
}: ModalProps): JSX.Element => {
  const ref: React.RefObject<HTMLDialogElement> =
    useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog className="modal container" ref={ref} onClose={closeModal}>
      <div>{children}</div>
      <button className="button" onClick={closeModal}>
        Zavřít
      </button>
    </dialog>
  );
};
