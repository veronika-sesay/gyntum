import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import './style.css';
export const Modal = ({ openModal, closeModal, children, }) => {
    const ref = useRef(null);
    const contentRef = useRef(null);
    useEffect(() => {
        const dialog = ref.current;
        const content = contentRef.current;
        if (!dialog || !content)
            return;
        if (openModal) {
            // Show dialog and disable body scroll
            dialog?.showModal();
            document.body.style.overflow = 'hidden';
            // Reset scroll immediately
            dialog.scrollTop = 0;
            content.scrollTop = 0;
            // Wait until next paint so the browser has laid out the dialog,
            // then scroll the actual scrolling container to top.
            requestAnimationFrame(() => {
                // Also wrap in another rAF to be extra-safe across browsers:
                requestAnimationFrame(() => {
                    dialog.scrollTop = 0;
                    content.scrollTop = 0;
                });
            });
        }
        else {
            // Close and allow background scrolling
            dialog?.close();
            document.body.style.overflow = '';
            dialog.scrollTop = 0;
            content.scrollTop = 0;
        }
    }, [openModal]);
    const handleClose = () => {
        const dialog = ref.current;
        const content = contentRef.current;
        closeModal();
        if (dialog)
            dialog.scrollTop = 0;
        if (content)
            content.scrollTop = 0;
        document.body.style.overflow = '';
    };
    return (_jsx("dialog", { className: "modal container", ref: ref, onClose: closeModal, children: _jsxs("div", { className: "modal-content", ref: contentRef, children: [children, _jsx("button", { className: "button", onClick: handleClose, children: "Zav\u0159\u00EDt" })] }) }));
};
