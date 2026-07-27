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
    await expect(canvas.getByText("Finish project report")).toBeInTheDocument();
  },
};
