import React from "react";
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodoFilterControl";
import { ITodoListProps } from "./Interfaces";
import { clearCompletedTodos } from "../store/actions";
import { useDispatch } from "react-redux";

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const leftTodoCount = React.useMemo((): number => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    return unCompletedTodos.length;
  }, [todos]);

  return (
    <>
      <section className="todo-list-section">
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>

        <div className="todo-filter-control">
          <div className="todos-count">{leftTodoCount} items left</div>

          <div className="control-btn group filter-control-for-desktop">
            <TodoFilterControl />
          </div>

          <div className="control-btn">
            <button
              data-testid="clear-completed-button"
              className="btn"
              onClick={() => dispatch(clearCompletedTodos())}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </section>

      {/* For Mobile */}
      {/*<section className="filter-control-for-mobile">*/}
      {/*  <div className="control-btn group">*/}
      {/*    <TodoFilterControl />*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
};

export default TodoList;
