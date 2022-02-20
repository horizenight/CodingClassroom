import React from "react";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth, provider } from "../lib/firebase";

const AddContext = createContext();
// created a context

export function useLocalContext() {
  return useContext(AddContext);
}
// get the value of context

export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const [joinClassDialog, setJoinClassDialog] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInMail, setLoggedInMail] = useState(null);

  const login = () => {
    auth.signInWithPopup(provider);
  };

  useEffect(() => {
    // users exist or not
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoggedInMail(authUser.email);
        setLoggedInUser(authUser);
      } else {
        setLoggedInMail(null);
        setLoggedInUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    createClassDialog,
    setCreateClassDialog,
    joinClassDialog,
    setJoinClassDialog,
    login,
    loggedInMail,
    loggedInUser,
  };

  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}
// to wrap it in context
