export interface ITodo {
  id: string;
  content: string;
  completed: boolean;
}

export enum FilterStatus {
  all = "all",
  complete = "complete",
  active = "active",
}

export interface IState {
  todos: ITodo[];
  theme: "light" | "dark";
  filterStatus: FilterStatus;
}

export interface IStore {
  store: IState;
}
