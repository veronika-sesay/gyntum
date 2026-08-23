import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, useLocation, } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./pages/Navigation";
import "./global.css";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./pages/Footer";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Privacy } from "./pages/Footer/Privacy";
import { PlasmaJett } from "./pages/PlasmaJett";
import { Price } from "./pages/Footer/Price";
import { SmartMedix } from "./pages/Footer/SmartMedix";
// Disable browser scroll restoration
if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
}
const App = () => {
    const location = useLocation();
    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        }, observerOptions);
        // Use MutationObserver to watch for new elements
        const mutationObserver = new MutationObserver(() => {
            const elementsToAnimate = document.querySelectorAll(".text, .photo, .hours, .news, .insurance, .care-items, .services > .item-text, .plasma-jett__text--question, .plasma-jett__img, .plasma-jett__text, .faq__item, h1, h2, h3, h4");
            elementsToAnimate.forEach((el) => {
                if (!el.classList.contains("animate")) {
                    observer.observe(el);
                }
            });
        });
        // Start observing the document for changes
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });
        // Initial observation
        const elementsToAnimate = document.querySelectorAll(".text, .photo, .hours, .news, .insurance, .care-items, .services > .item-text, .plasma-jett__text--question, .plasma-jett__img, .plasma-jett__text, .faq__item, h1, h2, h3, h4");
        elementsToAnimate.forEach((el) => observer.observe(el));
        // Cleanup
        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, [location.pathname]);
    return (_jsxs(_Fragment, { children: [_jsx("header", { children: _jsx(Navigation, {}) }), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] }));
};
const container = document.querySelector("#app");
if (container) {
    createRoot(container).render(_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(App, {}), children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsx(Route, { path: "home", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "services", element: _jsx(Services, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "privacy", element: _jsx(Privacy, {}) }), _jsx(Route, { path: "plasmajett", element: _jsx(PlasmaJett, {}) }), _jsx(Route, { path: "price", element: _jsx(Price, {}) }), _jsx(Route, { path: "smartmedix", element: _jsx(SmartMedix, {}) }), _jsx(Route, { path: "*", element: _jsx("main", { style: { padding: "3rem" }, children: _jsx("p", { children: "Tady nen\u00ED v\u016Fbec nic!" }) }) })] }) }) }));
}
