import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);
    const closeNav = () => setNavOpen(false);
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
        if (navOpen)
            closeNav();
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "top-row container", children: [_jsxs("div", { className: "top-row__item", children: [_jsx("img", { className: "icon", src: "../img/address.svg", alt: "address icon" }), _jsx("a", { href: "", children: "Kpt. Jaro\u0161e 2876, 390\u00A003\u00A0T\u00E1bor" })] }), _jsxs("div", { className: "top-row__item", children: [_jsx("img", { className: "icon", src: "../img/phone.svg", alt: "phone icon" }), _jsx("a", { href: "tel:+420732726631", children: "+420 732 726 631" })] }), _jsxs("div", { className: "top-row__item", children: [_jsx("img", { className: "icon", src: "../img/email.svg", alt: "email icon" }), _jsx("a", { href: "mailto:info@gyntum.cz", children: "info@gyntum.cz" })] })] }), _jsxs("div", { className: "menu container", children: [_jsxs("div", { className: "menu-desktop", children: [_jsx(Link, { to: "/home", children: _jsx("img", { className: "logo", src: "../img/logo-image.svg", alt: "logo" }) }), _jsxs("nav", { className: "nav", children: [_jsx("a", { href: "/home/#news", onClick: (e) => scrollToSection(e, 'news'), children: "Aktuality" }), _jsx("a", { href: "/home/#hours", onClick: (e) => scrollToSection(e, 'hours'), children: "Ordina\u010Dn\u00ED hodiny" }), _jsxs("div", { className: "emmy", children: [' ', _jsx("a", { href: "https://www.sestraemmy.cz/gyntum", target: "_blank", rel: "noopener noreferrer", children: "Virtu\u00E1ln\u00ED sestra Emmy" })] })] })] }), _jsxs("div", { className: "menu-mobile", children: [_jsx(Link, { to: "/home", children: _jsx("img", { className: "logo", src: "../img/logo-image.svg", alt: "logo" }) }), _jsx("button", { onClick: () => setNavOpen(!navOpen), className: navOpen ? 'nav-btn--closed' : 'nav-btn' }), _jsxs("div", { className: navOpen ? 'nav-mobile' : 'menu-mobile--closed', children: [_jsx("a", { href: "/home/#news", onClick: (e) => scrollToSection(e, 'hours'), children: "Aktuality" }), _jsx("a", { href: "/home/#hours", onClick: (e) => scrollToSection(e, 'hours'), children: "Ordina\u010Dn\u00ED hodiny" }), _jsx("a", { className: "emmy", href: "https://www.sestraemmy.cz/gyntum", target: "_blank", rel: "noopener noreferrer", children: "Virtu\u00E1ln\u00ED sestra Emmy" })] })] })] })] }));
};
