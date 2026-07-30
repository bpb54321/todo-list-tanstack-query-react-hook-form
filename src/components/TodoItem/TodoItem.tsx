import { Checkbox } from "@mantine/core";
import { IconTrash, IconWritingSign } from "@tabler/icons-react";
import classes from "./TodoItem.module.css";

export type TodoItemProps = {
  text: string;
};

export function TodoItem({ text }: TodoItemProps) {
  return (
    <>
      <Checkbox label={text} />
      <button type="button" aria-label="Edit" className={classes.actionButton}>
        <IconWritingSign />
      </button>
      <button type="button" aria-label="Delete">
        <IconTrash />
      </button>
    </>
  );
}
