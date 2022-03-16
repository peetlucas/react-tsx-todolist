/* eslint-disable */
import React, { FC, ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from './TodoItem';
import { data } from '../todos';
import { AddTodo } from './AddTodo';
import { ITodo } from '../interface';

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(data);
  const [task, setTask] = useState<string>('');

  // Get todos from localStorage
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos') || '{}');
    if (getTodos) {
      setTodos(getTodos);
    }
  }, []);

  //Save todos in localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleAdd = (todo: ITodo): void => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask('');
  };

  const handleChange = (e: ChangeEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      task: task,
      isComplete: false,
    };
    task && handleAdd(todo);
  };

  const handleDelete = (id: string): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <section>
      <div>
        <AddTodo
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          task={task}
        />
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};
