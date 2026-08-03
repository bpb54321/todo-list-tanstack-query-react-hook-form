import { DashedDivider } from "../DashedDivider/DashedDivider";
import { TodoItem } from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";

export type Todo = {
  id: string;
  text: string;
  checked: boolean;
};

export type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps) {
  return (
    <div className={classes.list} data-testid="todo-list-container">
      {todos.map((todo, index) => (
        <div key={todo.id} data-name="todo-item-group">
          <TodoItem
            text={todo.text}
            checked={todo.checked}
            onChange={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
          />
          {index < todos.length - 1 && <DashedDivider />}
        </div>
      ))}
    </div>
  );
}
