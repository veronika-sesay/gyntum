import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
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
    const observerOptions: { threshold: number; rootMargin: string } = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      observerOptions
    );

    // Use MutationObserver to watch for new elements
    const mutationObserver = new MutationObserver(() => {
      const elementsToAnimate: NodeListOf<Element> = document.querySelectorAll(
        ".text, .photo, .hours, .news, .insurance, .care-items, .services > .item-text, .plasma-jett__text--question, .plasma-jett__img, .plasma-jett__text, .faq__item, h1, h2, h3, h4"
      );
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
    const elementsToAnimate: NodeListOf<Element> = document.querySelectorAll(
      ".text, .photo, .hours, .news, .insurance, .care-items, .services > .item-text, .plasma-jett__text--question, .plasma-jett__img, .plasma-jett__text, .faq__item, h1, h2, h3, h4"
    );
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

const container: Element | null = document.querySelector("#app");
if (container) {
  createRoot(container).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="plasmajett" element={<PlasmaJett />} />
          <Route path="price" element={<Price />} />
          <Route path="smartmedix" element={<SmartMedix />} />
          {/* Add other routes as needed */}
          <Route
            path="*"
            element={
              <main style={{ padding: "3rem" }}>
                <p>Tady není vůbec nic!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
