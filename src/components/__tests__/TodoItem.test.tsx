/* eslint-disable */
import * as React from 'react';
import * as enzyme from 'enzyme';
import { TodoItem } from '../TodoItem';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });

describe('TodoItem text', () => {
    test('completed=true, when text filled and strikethrough', () => {
        const onDummy = jest.fn();
        const todoItem = enzyme.shallow(
            <TodoItem
            todo={{ id: '1', task: 'Write TypeScript todo list', isComplete: false }}
            handleCheckTodo={onDummy}
            handleDelete={onDummy} />
        );

        // Text has been entered
        expect(todoItem.find('li > label').text()).toEqual('Todo item1');
        // Strikethrough made
        const style = todoItem.find('li > label').props().style;
        if (style !== undefined) {
            expect(style.textDecoration).toEqual('line-through');
        }
    });

    test('completed=false', () => {
        const onDummy = jest.fn();
        const todoItem = enzyme.shallow(
            <TodoItem
            todo={{ id: '1', task: 'Write TypeScript todo list', isComplete: false }}
            handleCheckTodo={onDummy}
            handleDelete={onDummy} />
        );

        // Text has been filled
        expect(todoItem.find('li > label').text()).toEqual('Todo item1');
        // Strikethrough has not been made
        const style = todoItem.find('li > label').props().style;
        if (style !== undefined) {
            expect(style.textDecoration).toEqual('none');
        }
    });

    test('Clicking on the button fires handleChange', () => {
        const onDummy = jest.fn();
        const handleDeleteSpy = jest.fn();
        const handleCheckTodoSpy = jest.fn();

        const wrapper = enzyme.shallow(          
            <TodoItem
            todo={{ id: '1', task: 'Write TypeScript todo list', isComplete: false }}
            handleCheckTodo={onDummy}
            handleDelete={onDummy} />
        );

        // Click the button handleChange
        wrapper.find('label').simulate('click');

        // handleDelete is fired
        expect(handleDeleteSpy).toHaveBeenCalled();
    });
});

describe('Delete button', () => {
    test('Delete button created for each todo item', () => {
        const onDummy = jest.fn();
        const todoItem = enzyme.shallow(
            <TodoItem
            todo={{ id: '1', task: 'Write TypeScript todo list', isComplete: false }}
            handleCheckTodo={onDummy}
            handleDelete={onDummy} />
        );
        // Button text is Delete
        expect(todoItem.find('li > button').text()).toEqual('Delete');
        // Button created
        expect(todoItem.find('li > button').length).toBe(1);
    });

    test('Clicking the delete button fires handleDelete', () => {
        const onDummy = jest.fn();
        const handleDeleteSpy = jest.fn();
        
        const wrapper = enzyme.shallow(
            <TodoItem
            todo={{ id: '1', task: 'Write TypeScript todo list', isComplete: false }}
            handleCheckTodo={onDummy}
            handleDelete={onDummy} />
        );

        // Press the Delete button
        wrapper.find('button').simulate('click');

        // handleDelete fires
        expect(handleDeleteSpy).toHaveBeenCalled();
    });
});
