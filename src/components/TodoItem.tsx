/* eslint-disable */
import { ITodoProps } from "../interface";

export const TodoItem = ({
  todo: { id, task, isComplete },
  handleCheckTodo,
  handleDelete,
}: ITodoProps) => (
  <section className="list-item">
    <input
      type="text"
      value={task}
      onChange={() => handleCheckTodo(id)}
      className={`list ${isComplete ? "complete" : ""}`}
    />
    <div>
      <button
        className="button-complete task-button"
        onClick={() => handleCheckTodo(id)}
      >
        <i className="fa fa-check-circle"></i>
      </button>
      <button
        aria-label="Delete a todo"
        className="button-delete task-button"
        onClick={() => handleDelete(id)}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </section>
);
