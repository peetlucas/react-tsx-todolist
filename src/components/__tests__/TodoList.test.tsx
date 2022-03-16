/* eslint-disable */
import * as React from 'react';
import * as enzyme from 'enzyme';
import { TodoList } from '../TodoList';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ITodoProps } from '../../interface';
import { TodoItem } from '../TodoItem';

enzyme.configure({ adapter: new Adapter() });

describe('TodoList', () => {
    const props: ITodoProps = {
      todo: { id: '1', task: '', isComplete: false },      
      handleCheckTodo: jest.fn(),
      handleDelete: jest.fn(),      
    };

    test('Generate Todo components', () => {
        const wrapper = enzyme.shallow(<TodoItem {...props} />);
        expect(wrapper.find(TodoItem)).toBe(props.todo);
    });
});
