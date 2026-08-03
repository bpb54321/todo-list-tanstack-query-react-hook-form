import { Checkbox } from "@mantine/core";
import { IconTrash, IconWritingSign } from "@tabler/icons-react";
import classes from "./TodoItem.module.css";

export type TodoItemProps = {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function TodoItem({
  text,
  checked,
  onChange,
  onEdit,
  onDelete,
}: TodoItemProps) {
  return (
    <div data-testid="todo-row" className={classes.row}>
      <div className={classes.content}>
        <Checkbox
          aria-label={text}
          checked={checked}
          onChange={(event) => onChange(event.currentTarget.checked)}
          size="xs"
          styles={{
            input: {
              borderColor: checked
                ? "var(--mantine-color-blue-filled)"
                : "var(--mantine-color-gray-3)",
              backgroundColor: checked
                ? "var(--mantine-color-blue-filled)"
                : undefined,
            },
          }}
        />
        <span
          className={`${classes.text}${checked ? ` ${classes.textChecked}` : ""}`}
        >
          {text}
        </span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          aria-label={`Edit ${text}`}
          className={classes.actionButton}
          onClick={onEdit}
        >
          <IconWritingSign />
        </button>
        <button
          type="button"
          aria-label={`Delete ${text}`}
          className={classes.actionButton}
          onClick={onDelete}
        >
          <IconTrash />
        </button>
      </div>
    </div>
  );
}
