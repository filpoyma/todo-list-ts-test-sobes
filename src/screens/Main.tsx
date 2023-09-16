import React, { useState } from "react";
import "./styles.css";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import { FilterStatus, IState } from "../store/Interfaces";

const Main: React.FC = () => {
  const todos = useSelector((state: IState) => state.todos);
  const filterStatus = useSelector((state: IState) => state.filterStatus);
  const [themeLight, setThemeLight] = useState(true);

  const themeClass = themeLight ? "light" : "dark";

  const filteredTodos = React.useMemo(() => {
    switch (filterStatus) {
      case FilterStatus.active:
        return todos.filter((todo) => !todo.completed);
      case FilterStatus.complete:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filterStatus]);

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <main>
          <TodoForm />
          <TodoList todos={filteredTodos} />
        </main>
      </div>
    </div>
  );
};

export default Main;
