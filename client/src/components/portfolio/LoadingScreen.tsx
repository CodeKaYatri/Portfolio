import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const hide = () => {
      setIsHidden(true);
      setTimeout(() => setIsMounted(false), 400);
    };

    window.addEventListener("load", hide);
    const fallback = setTimeout(hide, 1200);

    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(fallback);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="page-loader" data-hidden={isHidden}>
      <div className="loader-shell">
        <div className="loader-ring" />
        <div className="loader-glow" />
        <div className="loader-dot" />
      </div>
      <p className="loader-text">Loading your portfolio...</p>
    </div>
  );
}


