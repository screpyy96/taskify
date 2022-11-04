import React, { useState, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList';
import { Todo } from './Model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])


  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '');
    if (todos) {
      setTodos(todos);
    }
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }])
      setTodo('')
    }
  }

  // console.log(todos)
  return (
    <div className="app">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
