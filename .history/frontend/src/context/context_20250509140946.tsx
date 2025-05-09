"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the type for the context value
interface GeneralContextType {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
  setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>;


  applicationFormState: Record<string, string>;
  setApplicationFormState: React.Dispatch<React.SetStateAction<Record<string, string>>>;


}


// Create the context
export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

// Create a provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the value state


  // Detect mobile devices
  const [isMobile, setIsMobile] = useState<boolean>(true);

const [isDesktop, setIsDesktop] = useState(false)

const [applicationFormState, setApplicationFormState] = useState<Record<string, string>>({});


useEffect(() => {
  // Check if window is available (client-side only)
  if (typeof window !== 'undefined') {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768); // Set isMobile state based on window width
      setIsDesktop(window.innerWidth > 865); // Optionally set isDesktop state
    };

    // Listen for window resize event and initial check
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
}, []);


  // useEffect(() => {
  //   console.log('is mobile', isMobile);
  //   console.log("is desktop", isDesktop)
  // }, [isDesktop]);

  const contextValue = {

    isMobile,
    setIsMobile,
    applicationFormState,
    setApplicationFormState,
    isDesktop,
    setIsDesktop

   
  };

  return <GeneralContext.Provider value={contextValue}>{children}</GeneralContext.Provider>;
};

export const useGeneralContext = (): GeneralContextType => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('useGeneralContext must be used within a ContextProvider');
  }
  return context;
};