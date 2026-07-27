import { Text } from "@mantine/core";

export type TodoItemProps = {
  text: string;
};

export function TodoItem({ text }: TodoItemProps) {
  return <Text>{text}</Text>;
}
