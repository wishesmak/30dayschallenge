import React, { createContext, useContext } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";

interface IAuthContext {
  signIn: () => void;
  signOut: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => useContext(AuthContext) as IAuthContext;

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    await signInWithPopup(auth, provider).then((res) => console.log("SUCCESS"));
  };

  const signOut = async () => {
    await auth.signOut();
  };

  const value = { signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
