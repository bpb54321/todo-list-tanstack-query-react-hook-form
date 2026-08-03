import { Divider } from "@mantine/core";
import { TodoItem } from "../TodoItem/TodoItem";

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
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <TodoItem
            text={todo.text}
            checked={todo.checked}
            onChange={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
          />
          {index < todos.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}
