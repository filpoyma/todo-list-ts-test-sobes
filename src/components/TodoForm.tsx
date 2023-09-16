import React, { ChangeEvent, FormEvent, useState } from "react";
import { uniqId } from "../helpers/functions";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

const TodoForm: React.FC = () => {
  console.log("TodoForm");
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput) {
      const newTodo = {
        id: uniqId(),
        content: todoInput.trim(),
        completed: false,
      };
      dispatch(addTodo(newTodo));

      setTodoInput("");
    }
  };

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>

      <form data-testid="input-form" onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Add New Todo</label>
        <input
          data-testid="input"
          type="text"
          name="todo-input"
          className="todo-input"
          id="todoInput"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
        <button data-testid="button" id="submitNewTodo" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default React.memo(TodoForm);
