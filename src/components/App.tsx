import { useEffect, useRef, useState } from 'react';
import { ITodo } from '../types/data';
import TodoList from './TodoList';
import './App.css';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toogleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      }),
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <main>
      <h1>Todos App</h1>
      <form>
        <input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          name='todo'
          type='text'
          placeholder='Enter todo...'
          required
        />
        <button onClick={addTodo} type='submit' aria-label='Add todo'>
          Add
        </button>
      </form>
      <TodoList items={todos} removeTodo={removeTodo} toogleTodo={toogleTodo} />
    </main>
  );
};

export { App };
