import React from 'react';
import { Todo } from '../Model';
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
  console.log(todos)

  return (
    <div className='todos' >
      {todos.map((todo) => {
        return (
          <SingleTodo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos} />
        )
      })}
    </div>

  );
};

export default TodoList;
