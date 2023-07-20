import { ITodo } from '../types/data';
import './TodoItem.css';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toogleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toogleTodo } = props;

  return (
    <li>
      <input type='checkbox' checked={complete} onChange={() => toogleTodo(id)} />
      <p className={complete ? 'complete' : ''}>{title}</p>
      <button onClick={() => removeTodo(id)}>X</button>
    </li>
  );
};

export default TodoItem;
