import { ActionTypes } from "./types";
import { FilterStatus, ITodo } from "./Interfaces";

export const addTodo = (todo: ITodo) => ({
  type: ActionTypes.ADD_TODO,
  payload: { todo },
});

export const clearCompletedTodos = () => ({
  type: ActionTypes.CLEAR_COMPLITED_TODO,
});

export const doneTodo = (id: string) => ({
  type: ActionTypes.DONE_TODO,
  payload: { id },
});

export const setFilterStatus = (status: FilterStatus) => ({
  type: ActionTypes.SET_FILTER_STATUS,
  payload: { status },
});

export const switchTheme = () => ({
  type: ActionTypes.SWITCH_THEME,
});
