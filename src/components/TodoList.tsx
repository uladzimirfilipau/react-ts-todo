import { ITodo } from '../types/data';
import TodoItem from './TodoItem';
import './TodoList.css';

interface ITodoList {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toogleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { items, toogleTodo, removeTodo } = props;

  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} toogleTodo={toogleTodo} removeTodo={removeTodo} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
