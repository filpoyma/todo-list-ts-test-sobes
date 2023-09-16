import { Action, ActionTypes } from "./types";
import { uniqId } from "../helpers/functions";
import { FilterStatus, IState } from "./Interfaces";

const todos = [
  { id: uniqId(), content: "Тестовое задание", completed: false },
  { id: uniqId(), content: "Прекрасный код", completed: true },
  { id: uniqId(), content: "Покрытие тестами", completed: false },
];

export const initialState: IState = {
  todos: todos,
  isThemeLight: true,
  filterStatus: FilterStatus.all,
};

export const reducer = (
  state: IState = initialState,
  action: Action
): IState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload.todo] };

    case ActionTypes.DONE_TODO:
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: !todo.completed };
        return todo;
      });
      return { ...state, todos: newTodos };

    case ActionTypes.CLEAR_COMPLITED_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
        filterStatus: FilterStatus.all,
      };

    case ActionTypes.SET_FILTER_STATUS:
      return {
        ...state,
        filterStatus: action.payload.status,
      };

    case ActionTypes.SWITCH_THEME:
      return {
        ...state,
        isThemeLight: !state.isThemeLight,
      };

    default:
      return state;
  }
};
