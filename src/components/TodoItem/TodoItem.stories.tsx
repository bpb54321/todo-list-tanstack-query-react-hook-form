import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { TodoItem } from "./TodoItem";

const meta = {
  title: "Components/TodoItem",
  component: TodoItem,
  args: {
    text: "Finish project report",
  },
} satisfies Meta<typeof TodoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole("checkbox", {
      name: "Finish project report",
    });
    await expect(checkbox).toBeInTheDocument();

    const label = canvas.getByText("Finish project report");
    const paddingInlineStart = getComputedStyle(label).getPropertyValue(
      "padding-inline-start",
    );
    await expect(paddingInlineStart).toBe("12px");

    const editButton = canvas.getByRole("button", { name: "Edit" });
    await expect(editButton).toBeInTheDocument();

    const editButtonStyles = getComputedStyle(editButton);
    await expect(editButtonStyles.width).toBe("32px");
    await expect(editButtonStyles.height).toBe("32px");
    await expect(editButtonStyles.borderRadius).toBe("6px");
    await expect(editButtonStyles.backgroundColor).toBe("rgba(0, 0, 0, 0)");
    await expect(editButtonStyles.cursor).toBe("pointer");

    const editIcon = editButton.querySelector(".tabler-icon-writing-sign");
    await expect(editIcon).toBeInTheDocument();

    const deleteButton = canvas.getByRole("button", { name: "Delete" });
    await expect(deleteButton).toBeInTheDocument();

    const deleteButtonStyles = getComputedStyle(deleteButton);
    await expect(deleteButtonStyles.width).toBe("32px");
    await expect(deleteButtonStyles.height).toBe("32px");
    await expect(deleteButtonStyles.borderRadius).toBe("6px");
    await expect(deleteButtonStyles.backgroundColor).toBe("rgba(0, 0, 0, 0)");
    await expect(deleteButtonStyles.cursor).toBe("pointer");

    const deleteIcon = deleteButton.querySelector(".tabler-icon-trash");
    await expect(deleteIcon).toBeInTheDocument();

    const row = canvas.getByTestId("todo-row");
    const rowStyles = getComputedStyle(row);
    await expect(rowStyles.display).toBe("flex");
    await expect(rowStyles.alignItems).toBe("center");
    await expect(rowStyles.justifyContent).toBe("space-between");
  },
};
