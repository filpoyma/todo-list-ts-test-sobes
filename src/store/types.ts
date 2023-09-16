import { FilterStatus, ITodo } from "./Interfaces";

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  DONE_TODO = "DONE_TODO",
  CLEAR_COMPLITED_TODO = "CLEAR_COMPLITED_TODO",
  SET_FILTER_STATUS = "SET_FILTER_STATUS",
  SWITCH_THEME = "SWITCH_THEME",
}

interface IActionAddTodo {
  type: ActionTypes.ADD_TODO;
  payload: { todo: ITodo };
}

interface IActionDone {
  type: ActionTypes.DONE_TODO;
  payload: { id: string };
}

interface IActionClearComplited {
  type: ActionTypes.CLEAR_COMPLITED_TODO;
  payload: string;
}

interface IActionSetFilterStatus {
  type: ActionTypes.SET_FILTER_STATUS;
  payload: { status: FilterStatus };
}

interface IActionSwitchTheme {
  type: ActionTypes.SWITCH_THEME;
}

export type Action =
  | IActionDone
  | IActionClearComplited
  | IActionAddTodo
  | IActionSetFilterStatus
  | IActionSwitchTheme;
