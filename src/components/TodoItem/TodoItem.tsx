import { Checkbox } from "@mantine/core";

export type TodoItemProps = {
  text: string;
};

export function TodoItem({ text }: TodoItemProps) {
  return (
    <>
      <Checkbox label={text} />
      <button type="button" aria-label="Edit" />
      <button type="button" aria-label="Delete" />
    </>
  );
}
