import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);

    
  // };
  // const showPopupForDuration = (duration) => {
  //   setShowPopup(true);
  //   setTimeout(() => {
  //     setShowPopup(false);
  //   }, duration);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginn = () => {
    setIsAuthenticated(true);
  };
  
  return (
    <PopupContext.Provider value={{ isAuthenticated, loginn }}>
      {children}
    </PopupContext.Provider>
  );
};
