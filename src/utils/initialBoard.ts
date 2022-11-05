import { ICell } from "../types";

const initialBoard: ICell[] = [];

for (let i = 0; i < 30; i++)
  initialBoard.push({ id: i, description: "", isDone: false });

export default initialBoard;
