import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList';
import { Todo } from './Model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }])
      setTodo('')
    }
  }

  console.log(todos)
  return (
    <div className="app">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList />
    </div>
  );
}

export default App;
