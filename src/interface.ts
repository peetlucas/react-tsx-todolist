import { ChangeEvent, FormEvent } from "react";

export interface ITodo {
  id: string;
  task: string;
  isComplete: boolean;
}

export interface ITodoProps {  
  todo: ITodo;
  handleCheckTodo: (id: string) => void;
  handleDelete: (id: string) => void;
}

export interface IAddTodoProps {
  task: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent) => void;
}
