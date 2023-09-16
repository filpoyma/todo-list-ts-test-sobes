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
  isThemeLight: boolean;
  filterStatus: FilterStatus;
}

