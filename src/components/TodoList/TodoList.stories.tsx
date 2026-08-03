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

    // 12px dash + 12px gap to match the Figma dashPattern [12, 12]
    const line = separators[0].querySelector("line");
    await expect(line).not.toBeNull();
    const lineStyles = getComputedStyle(line!);
    await expect(lineStyles.strokeDasharray).toBe("12px, 12px");
    await expect(lineStyles.stroke).toBe("rgb(222, 226, 230)");

    // Expect the divider to be the same width as the companion todo
    const todoRows = canvas.getAllByTestId("todo-row");
    await expect(separators[0].getBoundingClientRect().width).toBe(
      todoRows[0].getBoundingClientRect().width,
    );

    // 4px gap between the divider and the next todo item
    const gap =
      todoRows[1].getBoundingClientRect().top -
      separators[0].getBoundingClientRect().bottom;
    await expect(gap).toBe(4);
  },
};

// Data exactly matches the full list in the Figma mock
export const FullList: Story = {
  args: {
    todos: [
      { id: "1", text: "Buy groceries", checked: true },
      { id: "2", text: "Finish project report", checked: false },
      { id: "3", text: "Schedule dentist appointment", checked: false },
      { id: "4", text: "Read a new book", checked: true },
      { id: "5", text: "Clean the apartment", checked: false },
    ],
  },
};
