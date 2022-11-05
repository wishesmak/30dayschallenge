import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import initialBoard from "../utils/initialBoard";

const Board = () => {
  const { activeChallenge } = useApp();

  return (
    <div className="flex items-center justify-center boardHeight">
      <div className="w-[340px] flex flex-wrap gap-2">
        {activeChallenge?.board.map((cell) => (
          <div
            key={cell.id}
            className="w-[50px] h-[50px] border-2 border-black transition hover:bg-violet-200 hover:border-violet-500 cursor-pointer "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Board;
