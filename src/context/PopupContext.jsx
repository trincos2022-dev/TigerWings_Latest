import { createContext, useContext, useState, useCallback } from 'react';

const PopupContext = createContext(null);

export function PopupProvider({ children }) {
  const [scholarshipOpen, setScholarshipOpen] = useState(false);

  const openScholarship = useCallback(() => setScholarshipOpen(true), []);
  const closeScholarship = useCallback(() => setScholarshipOpen(false), []);

  return (
    <PopupContext.Provider value={{ scholarshipOpen, openScholarship, closeScholarship }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error('usePopup must be used within PopupProvider');
  return ctx;
}
