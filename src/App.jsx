import React, { useState, useEffect } from "react";
import LogisticsSite from "./LogisticsSite";

export default function App() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const handler = () => setShowSite(window.location.hash === "#site");
    window.addEventListener("popstate", handler);
    handler();
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const goToSite = () => {
    window.history.pushState({}, "", "#site");
    setShowSite(true);
  };

  if (!showSite) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-slate-900 text-white">
        <h1 className="text-5xl font-extrabold mb-6">Umala Logistics</h1>
        <button
          onClick={goToSite}
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-lg font-semibold shadow-lg"
        >
          Перейти на сайт
        </button>
      </div>
    );
  }

  return <LogisticsSite />;
}
