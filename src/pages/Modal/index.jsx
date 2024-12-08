import React from 'react';
import { useEffect, useRef } from 'react';
import './style.css';

export function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

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
}
