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
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 865);
      }
      else{
        setIsDesktop(true)
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth > 868);
      }
     
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  useEffect(() => {
    console.log('is mobile', isMobile);
    console.log("is desktop", isDesktop)
  }, [isDesktop]);

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