import React from "react";
import { Board, Header, Sidebar } from "../components";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return <></>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Board />
      </div>
    </div>
  );
};

export default Home;
