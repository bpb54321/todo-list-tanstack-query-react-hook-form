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
    await expect(getComputedStyle(checkbox).borderColor).toBe(
      "rgb(222, 226, 230)",
    );
    await expect(getComputedStyle(checkbox).width).toBe("16px");
    await expect(getComputedStyle(checkbox).height).toBe("16px");
    await expect(getComputedStyle(checkbox).borderRadius).toBe("4px");

    const label = canvas.getByText("Finish project report");
    const paddingInlineStart = getComputedStyle(label).getPropertyValue(
      "padding-inline-start",
    );
    await expect(paddingInlineStart).toBe("12px");
    await expect(getComputedStyle(label).color).toBe("rgb(0, 0, 0)");
    await expect(getComputedStyle(label).fontSize).toBe("14px");
    await expect(getComputedStyle(label).lineHeight).toBe("20px");

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
    const editButtonRect = editButton.getBoundingClientRect();
    const editIconRect = editIcon!.getBoundingClientRect();
    await expect(editIconRect.left - editButtonRect.left).toBe(4);
    await expect(editIconRect.top - editButtonRect.top).toBe(4);

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
    const deleteButtonRect = deleteButton.getBoundingClientRect();
    const deleteIconRect = deleteIcon!.getBoundingClientRect();
    await expect(deleteIconRect.left - deleteButtonRect.left).toBe(4);
    await expect(deleteIconRect.top - deleteButtonRect.top).toBe(4);

    const row = canvas.getByTestId("todo-row");
    const rowStyles = getComputedStyle(row);
    await expect(rowStyles.display).toBe("flex");
    await expect(rowStyles.alignItems).toBe("center");
    await expect(rowStyles.justifyContent).toBe("space-between");
    await expect(rowStyles.paddingTop).toBe("12px");
    await expect(rowStyles.paddingBottom).toBe("12px");
    await expect(row.getBoundingClientRect().width).toBe(476);

    const editRect = editButton.getBoundingClientRect();
    const deleteRect = deleteButton.getBoundingClientRect();
    const gapBetweenActions = deleteRect.left - editRect.right;
    await expect(gapBetweenActions).toBe(8);
  },
};
