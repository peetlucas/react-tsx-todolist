/* eslint-disable */
import React, { FC } from 'react';
import { IAddTodoProps } from '../interface';

export const AddTodo: FC<IAddTodoProps> = ({
  task,
  handleSubmit,
  handleChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='task-form'>
        <input
          type='text'
          name='task'
          placeholder='Enter a todo item...'
          className='task-input'
          autoComplete='off'
          value={task}
          onChange={handleChange}
        />
        <button className='button-add' type='submit'>
          Add
        </button>
      </div>
    </form>
  );
};
