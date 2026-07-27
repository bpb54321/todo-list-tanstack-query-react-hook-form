import { Checkbox } from "@mantine/core";

export type TodoItemProps = {
  text: string;
};

export function TodoItem({ text }: TodoItemProps) {
  return <Checkbox label={text} />;
}
