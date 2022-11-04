import { useLayoutEffect, useState } from "react";

const Board = () => {
  const [board, setBoard] = useState<number[]>([]);

  useLayoutEffect(() => {
    const testBoard = [];

    for (let i = 0; i < 30; i++) testBoard.push(i);

    setBoard(testBoard);
  }, []);

  return (
    <div className="flex items-center justify-center boardHeight">
      <div className="w-[340px] flex flex-wrap gap-2">
        {board.map((cell) => (
          <div
            key={cell}
            className="w-[50px] h-[50px] border-2 border-black transition hover:bg-violet-200 hover:border-violet-500 cursor-pointer "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Board;
