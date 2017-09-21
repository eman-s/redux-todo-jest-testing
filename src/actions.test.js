import React from 'react';
import ReactDOM from 'react-dom';
import {createTodo, toggleTodo, filterTodos} from './actions'


describe("test action creators", () => {
  test('creates todo', () => {
    expect(createTodo('Test')).toEqual({type:'CREATE_TODO', payload:'Test'})
  })
  test('returns id', () =>{
    expect(toggleTodo(1)).toEqual({type:'TOGGLE_TODO', payload:1})
  })
  test('returns filterType', () =>{
    expect(filterTodos('test')).toEqual({type:'FILTER_TODOS', payload:'test'})
  })
})
