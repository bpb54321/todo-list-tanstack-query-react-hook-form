import { render } from "@testing-library/react";
import { composeStories, setProjectAnnotations } from "@storybook/react";
import { page } from "vitest/browser";
import { expect, test } from "vitest";
import preview from "../../../.storybook/preview";
import * as stories from "./TodoItem.stories";

setProjectAnnotations(preview);

const { Default, Checked } = composeStories(stories);

test("TodoItem default matches visual baseline", async () => {
  render(<Default />);
  await document.fonts.ready;
  await expect(page.getByTestId("todo-row")).toBeInTheDocument();

  await expect(page.getByTestId("todo-row")).toMatchScreenshot(
    "todo-item-default",
  );
});

test("TodoItem checked matches visual baseline", async () => {
  render(<Checked />);
  await document.fonts.ready;
  await expect(page.getByTestId("todo-row")).toBeInTheDocument();

  await expect(page.getByTestId("todo-row")).toMatchScreenshot(
    "todo-item-checked",
  );
});
