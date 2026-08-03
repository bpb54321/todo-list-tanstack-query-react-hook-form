import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import { TodoItem, type TodoItemProps } from "./TodoItem";

function renderTodoItem(props: Partial<TodoItemProps> = {}) {
  return render(
    <MantineProvider>
      <TodoItem
        text="Finish project report"
        checked={false}
        onChange={jest.fn()}
        onEdit={jest.fn()}
        {...props}
      />
    </MantineProvider>,
  );
}

describe("TodoItem", () => {
  it("calls onEdit when the edit button is clicked", async () => {
    const user = userEvent.setup();
    const onEdit = jest.fn();
    renderTodoItem({ text: "Buy milk", onEdit });

    await user.click(
      screen.getByRole("button", { name: /edit buy milk/i }),
    );

    expect(onEdit).toHaveBeenCalledTimes(1);
  });
});
