export interface IUser {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface ICell {
  id: number;
  description: string;
  isDone: boolean;
}

export interface IChallenge {
  id: string;
  title: string;
  board: ICell[];
  createdBy: string;
}
