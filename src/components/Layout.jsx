import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const [showWelcome, setShowWelcome] = useState(() => {
    return sessionStorage.getItem("novastore_welcome_shown") !== "true";
  });

  useEffect(() => {
    if (!showWelcome) return;

    sessionStorage.setItem("novastore_welcome_shown", "true");

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [showWelcome]);

  return (
    <div className="app">
      <Navbar />

      {showWelcome && (
        <div className="welcome-message" role="status">
          <div>
            <strong>Welcome to NovaStore 👋</strong>
            <span>Find the right product for your everyday needs.</span>
          </div>
          <button type="button" onClick={() => setShowWelcome(false)} aria-label="Close welcome message">
            ×
          </button>
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 NovaStore. Built with React, Router, Hooks & Local Storage.</p>
      </footer>
    </div>
  );
}

export default Layout;
