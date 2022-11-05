import React, { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../firebase/config";
import useLocalStorage from "../hooks/useLocalStorage";
import { IUser } from "../types";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface IAuthContext {
  signIn: () => void;
  signOut: () => void;
  currentUser: IUser;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => useContext(AuthContext) as IAuthContext;

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [storedUser, setStoredUser] = useLocalStorage("user", null);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const signIn = async () => {
    await signInWithPopup(auth, provider)
      .then(async (res) => {
        const { uid, displayName, email, photoURL } = res.user;

        const checkedUser = (await getDoc(doc(db, "users", uid))).data();
        if (!checkedUser) {
          await setDoc(doc(db, "users", uid), {
            uid,
            name: displayName,
            email,
            photoURL,
          });
          setStoredUser({
            uid,
            name: displayName,
            email,
            photoURL,
          });
        } else {
          setStoredUser(checkedUser);
        }
      })
      .catch((err) => console.log(err));
  };

  const signOut = async () => {
    await auth.signOut();
    setStoredUser(null);
  };

  useEffect(() => {
    if (!storedUser) {
      navigate("/login");
    } else {
      navigate("/");
    }
    setCurrentUser(storedUser);
  }, [storedUser]);

  const value = { signIn, signOut, currentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
