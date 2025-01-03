import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navigation } from './pages/Navigation';
import './global.css';
import { HomePage } from './pages/HomePage';
import { Footer } from './pages/Footer';
import { About } from './pages/About';
const App = () => {
    return (_jsxs(_Fragment, { children: [_jsx("header", { children: _jsx(Navigation, {}) }), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] }));
};
const container = document.querySelector('#app');
if (container) {
    createRoot(container).render(_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(App, {}), children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsx(Route, { path: "home", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "*", element: _jsx("main", { style: { padding: '3rem' }, children: _jsx("p", { children: "Tady nen\u00ED v\u016Fbec nic!" }) }) })] }) }) }));
}
