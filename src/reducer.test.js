import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer'
import {createTodo, toggleTodo, filterTodos} from './actions'

describe("test reducers", () => {
  test('CREATE_TODO', () => {
    const initialState = {todos: [], nextId: 1};
    const state = reducer(initialState, createTodo('Test'));
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0]).toEqual({id: 1, done: false, text:'Test'})
  })
  test('TOGGLE_TODO', () => {
    const initialState = {todos: [{text:'test', id:1, done:false}]};
    const state = reducer(initialState, toggleTodo(1));
    expect(state.todos[0].done).toEqual(true)
  })
  test('FILTER_TODOS', () => {
    const initialState = {filter:''};
    const state = reducer(initialState, filterTodos('all'));
    expect(state.filter).toEqual('all')
  })
})
