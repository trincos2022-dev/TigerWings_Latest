import { createContext, useContext, useState, useCallback } from "react";

const PopupContext = createContext(null);

export function PopupProvider({ children }) {
  const [scholarshipOpen, setScholarshipOpen] = useState(false);
  const [applyNowSignal, setApplyNowSignal] = useState(0);

  const openScholarship = useCallback(() => setScholarshipOpen(true), []);
  const closeScholarship = useCallback(() => setScholarshipOpen(false), []);

  const triggerApplyNow = useCallback(() => {
    setApplyNowSignal((prev) => prev + 1);
  }, []);

  return (
    <PopupContext.Provider
      value={{
        scholarshipOpen,
        openScholarship,
        closeScholarship,
        applyNowSignal,
        triggerApplyNow,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("usePopup must be used within PopupProvider");
  return ctx;
}
