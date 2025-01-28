import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { news } from '../../content';
import { Modal } from '../Modal';
export const News = () => {
    const currentDate = new Date();
    // Filter out expired news
    const validNews = news.filter((item) => new Date(item.expiryDate) > currentDate);
    // Modal state
    const [modal, setModal] = useState(false);
    return (_jsx("div", { className: "news__none", children: validNews.length === 0 ? (_jsx("p", { children: "Moment\u00E1ln\u011B nem\u00E1me \u017E\u00E1dn\u00E9 aktuality." })) : (validNews.map((item) => (_jsxs("div", { className: "news__item", children: [_jsx("h3", { children: item.title }), _jsx("div", { children: item.body }), item.modal && (_jsxs(_Fragment, { children: [_jsx("button", { className: "button", onClick: () => setModal(true), children: "Zobrazit v\u00EDce" }), _jsx(Modal, { openModal: modal, closeModal: () => setModal(false), children: item.modal })] }))] }, item.id)))) }));
};
