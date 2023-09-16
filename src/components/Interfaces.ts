import React from "react";
import { ITodo } from "../store/Interfaces";

export interface ITodoListProps {
  todos: ITodo[];
}

export interface ITodoItemProps {
  todo: ITodo;
}

export interface ITheme {
  themeLight?: boolean;
  setThemeLight?: React.Dispatch<React.SetStateAction<boolean>>;
  filterStatus?: string;
  setFilterStatus?: React.Dispatch<React.SetStateAction<string>>;
}
