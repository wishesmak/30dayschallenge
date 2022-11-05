import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { v4 } from "uuid";
import initialBoard from "../utils/initialBoard";
import { useAuth } from "./AuthContext";
import { IChallenge } from "../types";

interface Props {
  children: React.ReactNode;
}

interface IAppContext {
  addNewChallenge: (title: string) => void;
  challenges: IChallenge[];
  changeActiveChallenge: (id: string) => void;
  activeChallenge: IChallenge | null;
}

const AppContext = createContext<IAppContext | null>(null);

export const useApp = () => useContext(AppContext) as IAppContext;

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const { currentUser } = useAuth();
  const [challenges, setChallenges] = useState<IChallenge[]>([]);
  const [activeChallenge, setActiveChallenge] = useState<IChallenge | null>(
    null
  );

  const addNewChallenge = async (title: string) => {
    if (currentUser) {
      await setDoc(doc(db, "challenges", v4()), {
        id: v4(),
        title,
        board: initialBoard,
        createdBy: currentUser.uid,
      });
    }
  };

  const changeActiveChallenge = (id: string) => {
    setActiveChallenge(challenges.find((c) => c.id === id) || null);
  };

  useEffect(() => {
    const q = query(
      collection(db, "challenges"),
      where("createdBy", "==", currentUser ? currentUser.uid : "")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const fetchedChallenges: IChallenge[] = [];
      snapshot.forEach((doc) =>
        fetchedChallenges.push(doc.data() as IChallenge)
      );

      setChallenges(fetchedChallenges);
    });

    return () => unsub();
  }, [currentUser]);

  const value = {
    addNewChallenge,
    challenges,
    activeChallenge,
    changeActiveChallenge,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
