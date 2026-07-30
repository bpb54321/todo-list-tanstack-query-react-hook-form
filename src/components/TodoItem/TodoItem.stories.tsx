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

    const editIcon = editButton.querySelector(".tabler-icon-writing-sign");
    await expect(editIcon).toBeInTheDocument();

    const deleteButton = canvas.getByRole("button", { name: "Delete" });
    await expect(deleteButton).toBeInTheDocument();

    const deleteIcon = deleteButton.querySelector(".tabler-icon-trash");
    await expect(deleteIcon).toBeInTheDocument();
  },
};
