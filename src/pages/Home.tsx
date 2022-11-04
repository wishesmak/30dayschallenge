import React from "react";
import { Board, Header, Sidebar } from "../components";

const Home = () => {
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
