import React from "react";
import { useDispatch } from "react-redux";
import IconCheck from "../images/icon-check.svg";
import { ITodoItemProps } from "./Interfaces";
import { doneTodo } from "../store/actions";

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const checkIcon = todo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : null;

  return (
    <li className={todo.completed ? "completed" : ""}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={todo.completed}
      />
      <div
        className="checkbox-border-wrap"
        data-testid="checkbox"
        onClick={() => dispatch(doneTodo(todo.id))}
      >
        <span className="checkbox">{checkIcon}</span>
      </div>
      <p>{todo.content}</p>
    </li>
  );
};

export default React.memo(TodoItem);
