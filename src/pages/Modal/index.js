import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import './style.css';
export const Modal = ({ openModal, closeModal, children, }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        }
        else {
            ref.current?.close();
        }
    }, [openModal]);
    return (_jsxs("dialog", { className: "modal container", ref: ref, onClose: closeModal, children: [_jsx("div", { children: children }), _jsx("button", { className: "button", onClick: closeModal, children: "Zav\u0159\u00EDt" })] }));
};
