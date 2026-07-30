import { Checkbox } from "@mantine/core";
import { IconTrash, IconWritingSign } from "@tabler/icons-react";
import classes from "./TodoItem.module.css";

export type TodoItemProps = {
  text: string;
};

export function TodoItem({ text }: TodoItemProps) {
  return (
    <div data-testid="todo-row" className={classes.row}>
      <Checkbox
        label={text}
        size="xs"
        styles={{
          input: {
            borderColor: "var(--mantine-color-gray-3)",
          },
          label: {
            fontSize: "14px",
            lineHeight: "20px",
          },
        }}
      />
      <div className={classes.actions}>
        <button
          type="button"
          aria-label="Edit"
          className={classes.actionButton}
        >
          <IconWritingSign />
        </button>
        <button
          type="button"
          aria-label="Delete"
          className={classes.actionButton}
        >
          <IconTrash />
        </button>
      </div>
    </div>
  );
}
