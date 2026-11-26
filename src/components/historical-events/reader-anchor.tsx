"use client";
import { useEffect } from "react";

export function ReaderAnchor() {
  useEffect(() => {
    const reveal = () => {
      const record = document.getElementById(location.hash.slice(1));
      if (record instanceof HTMLDetailsElement) {
        record.open = true;
        record.scrollIntoView({ block: "start" });
      }
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  return null;
}
