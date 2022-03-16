/* eslint-disable */
import * as React from 'react';
import * as enzyme from 'enzyme';
import { AddTodo } from '../AddTodo';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });

describe('AddTodo', () => {
    const addTodoSpy = jest.fn();
    const onDummy = jest.fn();
    let wrapper: enzyme.ShallowWrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(<AddTodo 
          task = {'Write TypeScript todo list'}
          handleSubmit={onDummy}
          handleChange={onDummy} />);
    });

    describe('Add Button', () => {
        test('There is a button', () => {
            expect(wrapper.find('.todo-submit').length).toBe(1);
        });

        test('Button text [Add]', () => {
            expect(wrapper.find('button').text()).toEqual('Add');
        });

        test('input if you press the button after entering a character string in addTodo field', () => {
            const mountWrapper = enzyme.mount(
                <AddTodo 
                task={'addTodoSpy'} handleSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
                  throw new Error('Function not implemented.');
                } } handleChange={function (e: React.ChangeEvent<Element>): void {
                  throw new Error('Function not implemented.');
                } }                 />
            );
            const inputValue = 'Write a TypeScript todo list';

            mountWrapper.setState({ input: inputValue }); // input simulate no value set

            // Press the button
            mountWrapper.find('form').simulate('submit');

            // addTodo 
            expect(addTodoSpy).toHaveBeenCalledTimes(1);
            expect(addTodoSpy).toHaveBeenCalledWith(inputValue);
        });
    });

    describe('input', () => {
        test('Upon text entry setState', () => {
            const mountWrapper = enzyme.mount(
              <AddTodo 
              task={'addTodoSpy'} handleSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
                throw new Error('Function not implemented.');
              } } handleChange={function (e: React.ChangeEvent<Element>): void {
                throw new Error('Function not implemented.');
              } }                 />
            );
            const setStateSpy = jest.spyOn(AddTodo.prototype, 'setState');

            expect(setStateSpy).toHaveBeenCalledTimes(0); // OK
            mountWrapper
                .find('input')
                .simulate('change', { target: { value: 'a' } });
            expect(setStateSpy).toHaveBeenCalledTimes(1); // OK            
        });

        test('Text has been entered in the input box', () => {
            wrapper.setState({
                input: 'Write a TypeScript todo list'
            });
            expect(wrapper.find('input').props().value).toEqual('Write a TypeScript todo list');
        });
    });
});
