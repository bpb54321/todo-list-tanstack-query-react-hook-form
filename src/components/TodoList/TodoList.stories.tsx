import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { TodoList } from "./TodoList";

const meta = {
  title: "Components/TodoList",
  component: TodoList,
  args: {
    todos: [
      { id: "1", text: "Buy groceries", checked: true },
      { id: "2", text: "Finish project report", checked: false },
    ],
  },
} satisfies Meta<typeof TodoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const separators = canvas.getAllByRole("separator");
    await expect(separators).toHaveLength(1);
  },
};
